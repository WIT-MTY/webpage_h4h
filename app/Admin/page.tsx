'use client';
import HeaderAdmin from '../componentes/admin_comp/HeaderAdmin';
import { useState } from 'react';
import { useMetricas1Data } from '../hooks/utils/useMetricas1Data';
import { useMetricas2Data } from '../hooks/utils/useMetricas2Data';
import { useMetricas3Data } from '../hooks/utils/useMetricas3Data';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface BarData {
  name: string;
  value: number;
}

function ChartModal({ title, onClose, children }: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-[90vw] max-w-4xl shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl font-bold leading-none"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}


function ChartCard({ title, borderColor = '#C4649F', className = '', onExpand, children }: {
  title: string;
  borderColor?: string;
  className?: string;
  onExpand: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-4 cursor-pointer group ${className}`}
      style={{ border: `3px solid ${borderColor}` }}
      onClick={onExpand}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <span className="text-xs text-[#C4649F] opacity-0 group-hover:opacity-100 transition-opacity">
          Ampliar
        </span>
      </div>
      {children}
    </div>
  );
}



export default function PageAdmin() {
  const { metricas1, loading1, error1 } = useMetricas1Data();
  const { metricas2, loading2, error2  } = useMetricas2Data();
  const { metricas3, loading3, error3 } = useMetricas3Data();

  const [expandedChart, setExpandedChart] = useState<string | null>(null);
  const closeModal = () => setExpandedChart(null);

  const [showAllRestrictions, setShowAllRestrictions] = useState(false);

  

  if (loading1) {
    return (
      <div className="p-8 flex justify-center items-center min-h-screen">
        <div className="text-[#4A0C32]">Cargando métricas...</div>      </div>
    );
  }

  
  if (error1) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error al cargar métricas: {error1}
        </div>
      </div>
    );
  }

  if (!metricas1) {
    return (
      <div className="p-8">
        <div className="text-[#4A0C32]">No hay datos disponibles</div>
      </div>
    );
  }

  if (loading2) {
    return (
      <div className="p-8 flex justify-center items-center min-h-screen">
        <div className="text-[#4A0C32]">Cargando métricas...</div>      </div>
    );
  }

  
  if (error2) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error al cargar métricas: {error1}
        </div>
      </div>
    );
  }

  if (!metricas2) {
    return (
      <div className="p-8">
        <div className="text-[#4A0C32]">No hay datos disponibles</div>
      </div>
    );
  }

  if (loading3) {
    return (
      <div className="p-8 flex justify-center items-center min-h-screen">
        <div className="text-[#4A0C32]">Cargando métricas...</div>      </div>
    );
  }

  
  if (error3) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error al cargar métricas: {error1}
        </div>
      </div>
    );
  }

  if (!metricas3) {
    return (
      <div className="p-8">
        <div className="text-[#4A0C32]">No hay datos disponibles</div>
      </div>
    );
  }


  
  // Seccion 1 metricas
  const kpiData = [
    { 
      label: "Pendientes", 
      value: metricas1.estatus?.find(e => e.estatus === "Pendiente")?.total || 0,
      color: "#EAB308"
    },
    { 
      label: "Aceptados", 
      value: metricas1.estatus?.find(e => e.estatus === "Aceptado")?.total || 0,
      color: "#22C55E"
    },
    { 
      label: "Rechazados", 
      value: metricas1.estatus?.find(e => e.estatus === "Rechazado")?.total || 0,
      color: "#EF4444"
    },
    { 
      label: "Mexicanas aceptadas", 
      value: metricas1.nacionalidad?.find(f => f.tipo === "Mexicanas")?.total || 0,
      color: "#096FE8"
    },
    { 
      label: "Extranjeras aceptadas", 
      value: metricas1.nacionalidad?.find(f => f.tipo === "Extranjeras")?.total || 0,
      color: "#5105AD"
    }
  ];

  
  const shirtSizeData = metricas1.tallas?.map(item => ({
    name: item.talla,
    value: item.total
  })) || [];


  const dietTypeData = metricas1.veganas?.map(item => ({
    name: item.tipo === "Veganas" ? "Vegano/a" : "No vegano/a",
    value: item.total,
    color: item.tipo === "Veganas" ? "#7F77DD" : "#C4649F"
  })) || [];

  
  const restrictionsData = metricas1.restricciones?.map(item => ({
    name: item.restriccion === "Con restricción" ? "Sí" : "No",
    value: item.total,
    color: item.restriccion === "Con restricción" ? "#EF4444" : "#22C55E"
  })) || [];

  
  const restrictionDetails = (() => {
    const detalles = metricas1.detalle_restricciones || [];
    const conteo: { [key: string]: number } = {};
    
    detalles.forEach(detalle => {
      if (detalle) {
        conteo[detalle] = (conteo[detalle] || 0) + 1;
      }
    });
    
    return Object.entries(conteo)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  })();

  //Seccion 2 metricas
  const carreraData = metricas2.carreras?.map(item => ({
    name: item.carrera,
    value: item.total
  })) || [];

  const semestreData = metricas2.semestres?.map(item => ({
    name: item.semestre,
    value: item.total
  })) || [];

  const universidadesMexData = metricas2.universidades_mexico?.map(item => ({
    name: item.universidad,
    value: item.total
  })) || [];

  

  const universidadesExtData = metricas2.universidades_extranjeras?.map(item => ({
    name: item.universidad,
    value: item.total
  })) || [];

  //Seccion 3 metricas
  const estadoData = metricas3.estados?.map(item => ({
    name: item.estado,
    value: item.total
  })) || [];




  
  

  return (
    <div className="p-8">

        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            estadísticas de participantes
        </h1>
        <p className="text-[#4A0C32]">
          Visión general de métricas de participantes
          <br />
          <span className="text-xs text-gray-500">Solo alumnas aceptadas, excepto resumen general</span>
        </p>
        <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
            {/* Línea decorativa */}
        </div>

        {/* Seccion 1: RESUMEN GENERAL */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          RESUMEN GENERAL
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {kpiData.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-gray-50 border-3 border-[#C4649F] rounded-lg p-4"
            >
              <p className="text-sm text-gray-500 mb-2">{kpi.label}</p>
              <p className="text-3xl font-medium" style={{ color: kpi.color }}>
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* talla camisa chart */}
        <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4 mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Talla de camisa</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={shirtSizeData}>
              <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
              <Bar dataKey="value" fill="#7F77DD" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Seccion 2: PREFERENCIAS ALIMENTARIAS */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          PREFERENCIAS ALIMENTARIAS
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Card 1: Tipo de dieta */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Tipo de dieta</h3>
            <div className="flex gap-3 mb-2">
              {dietTypeData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={dietTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  dataKey="value"
                >
                  {dietTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Card 2: Restricciones alimentarias */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Restricciones alimentarias</h3>
            <div className="flex gap-3 mb-2">
              {restrictionsData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={restrictionsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  dataKey="value"
                >
                  {restrictionsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detalle de restricciones */}
        <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4 mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Detalle de restricciones reportadas</h3>
          <div className="space-y-0">
            {(showAllRestrictions ? restrictionDetails : restrictionDetails.slice(0, 5)).map((item, index, arr) => (
              <div key={item.name}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                {index < arr.length - 1 && <div className="w-full h-px bg-gray-200" />}
              </div>
            ))}
          </div>
          {restrictionDetails.length > 5 && (

          <button
            onClick={() => setShowAllRestrictions(prev => !prev)}
            className="mt-3 text-xs text-[#C4649F] hover:underline w-full text-center"
          >
            {showAllRestrictions
            ? 'Ver menos'
            : `Ver más`}
          </button>
          )}
          
        </div>

        {/* Seccion 3: DATOS ACADÉMICOS */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          DATOS ACADÉMICOS
        </h2>

        {/* Row 1: Carrera y Semestre */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Alumnas por carrera */}
          <ChartCard title="Alumnas por carrera (Top 3)" onExpand={() => setExpandedChart('alumnas_carrera')}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={carreraData.slice(0, 3)}>
                <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                <Bar dataKey="value" fill="#7F77DD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            {carreraData.length > 5 && (
              <p className="text-xs text-gray-400 mt-1 text-right">Clic para ver completo</p>
            )}
          </ChartCard>

          {expandedChart === 'alumnas_carrera' && (
            <ChartModal title="Alumnas por carrera" onClose={closeModal}>
              <div className="overflow-x-auto">
                <div style={{ width: Math.max(500, carreraData.length*80), height: 700 }}>
                  <ResponsiveContainer height={700}>   
                    <BarChart data={carreraData}>
                      <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                      <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                      <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                      <Bar dataKey="value" fill="#7F77DD" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ChartModal>
          )}

          {/* Alumnas por semestre */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Alumnas por semestre</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={semestreData}>
                <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                <Bar dataKey="value" fill="#BA7517" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2: Universidades */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Universidades mexicanas */}
          <ChartCard title="Universidades mexicanas (Top 3)" onExpand={() => setExpandedChart('universidades')}>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={universidadesMexData.slice(0, 3)} layout="vertical">
                <XAxis type="number" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} width={150} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                <Bar dataKey="value" fill="#378ADD" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            {universidadesMexData.length > 5 && (
              <p className="text-xs text-gray-400 mt-1 text-right">Clic para ver completo</p>
            )}
          </ChartCard>

          {expandedChart === 'universidades' && (
            <ChartModal title="Universidades mexicanas" onClose={closeModal}>
              <div className="overflow-y-auto max-h-[65vh]">
                <div style={{ height: Math.max(300, universidadesMexData.length * 40) }}>
                  <ResponsiveContainer height={700}>   
                    <BarChart data={universidadesMexData} layout="vertical">
                      <XAxis type="number" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                      <YAxis type="category" dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} width={300} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                      <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                      <Bar dataKey="value" fill="#378ADD" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ChartModal>
          )}

          {/* Universidades extranjeras */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Universidades extranjeras</h3>
        
              {universidadesExtData.length > 0 ? (
                <div className="space-y-0">
                  {universidadesExtData.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between py-2.5">
                        <span className="text-sm text-gray-700">{item.name}</span>
                          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
                            {item.value}
                          </span>
                      </div>
                        {index < universidadesExtData.length - 1 && (
                          <div className="w-full h-px bg-gray-200" />
                        )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  No hay universidades extranjeras registradas
        </div>
        )}
          </div>
        </div>

        {/* Seccion 4: DATOS GEOGRÁFICOS */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          DATOS GEOGRÁFICOS
        </h2>
        <ChartCard title="Alumnas por estado" onExpand={() => setExpandedChart('alumnas_estado')}>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={estadoData.slice(0, 5)}>
              <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} interval={0} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
              <Bar dataKey="value" fill="#D85A30" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          {estadoData.length > 5 && (
              <p className="text-xs text-gray-400 mt-1 text-right">Clic para ver completo</p>
            )}
        </ChartCard>

        {expandedChart === 'alumnas_estado' && (
          <ChartModal title="Alumnas por estado" onClose={closeModal}>
            <div className="overflow-y-auto">
              <div style={{ width: Math.max(400, carreraData.length*80), height: 700 }}>
                <ResponsiveContainer height={700}>   
                  <BarChart data={estadoData}>
                    <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} interval={0} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                    <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                    <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                    <Bar dataKey="value" fill="#D85A30" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ChartModal>
        )}

    </div>
  );
}