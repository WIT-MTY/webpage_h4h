'use client';
import HeaderAdmin from '../componentes/admin_comp/HeaderAdmin';
import { useState } from 'react';
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

// TypeScript types
interface KPIData {
  label: string;
  value: number;
  color: string;
}

interface PieData {
  name: string;
  value: number;
  color: string;
}

interface BarData {
  name: string;
  value: number;
}

interface RestrictionDetail {
  name: string;
  count: number;
}

// Mock data constants
const kpiData: KPIData[] = [
  { label: 'Pendientes', value: 32, color: '#BA7517' },
  { label: 'Aceptadas', value: 0, color: '#3B6D11' },
  { label: 'Rechazadas', value: 0, color: '#A32D2D' },
  { label: 'Mexicanas aceptadas', value: 0, color: '#185FA5' },
  { label: 'Extranjeras aceptadas', value: 0, color: '#534AB7' },
];

const dietTypeData: PieData[] = [
  { name: 'No vegana', value: 75, color: '#639922' },
  { name: 'Vegana', value: 25, color: '#1D9E75' },
];

const restrictionsData: PieData[] = [
  { name: 'Sin restricciones', value: 65, color: '#378ADD' },
  { name: 'Con restricciones', value: 35, color: '#D85A30' },
];

const restrictionDetails: RestrictionDetail[] = [
  { name: 'Intolerancia a la lactosa', count: 8 },
  { name: 'Celiaquía / intolerancia al gluten', count: 5 },
  { name: 'Alergia a frutos secos', count: 4 },
  { name: 'Alergia a mariscos', count: 3 },
  { name: 'Vegetariana', count: 3 },
  { name: 'Alergia al huevo', count: 2 },
  { name: 'Alergia a la soya', count: 1 },
];

const carreraData: BarData[] = [
  { name: 'ITC', value: 18 },
  { name: 'IIS', value: 12 },
  { name: 'IDA', value: 8 },
  { name: 'IMT', value: 5 },
  { name: 'Otra', value: 3 },
];

const semestreData: BarData[] = [
  { name: '3°', value: 5 },
  { name: '4°', value: 10 },
  { name: '5°', value: 14 },
  { name: '6°', value: 8 },
  { name: '7°', value: 6 },
  { name: '8°', value: 3 },
];

const universidadesMexData: BarData[] = [
  { name: 'Tec MTY', value: 20 },
  { name: 'UANL', value: 10 },
  { name: 'UDEM', value: 7 },
  { name: 'UVM', value: 5 },
];

const universidadesExtData: RestrictionDetail[] = [
  { name: 'uni 1', count: 2 },
  { name: 'uni 2', count: 1 },
  { name: 'uni 3', count: 1 },
  { name: 'uni 4', count: 1 },
];

const estadoData: BarData[] = [
  { name: 'Nuevo León', value: 22 },
  { name: 'CDMX', value: 8 },
  { name: 'Jalisco', value: 6 },
  { name: 'Coahuila', value: 4 },
  { name: 'Tamaulipas', value: 3 },
  { name: 'Otro', value: 3 },
];

const shirtSizeData: BarData[] = [
  { name: 'XS', value: 4 },
  { name: 'S', value: 14 },
  { name: 'M', value: 18 },
  { name: 'L', value: 8 },
  { name: 'XL', value: 3 },
];

export default function PageAdmin() {
  

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
            {restrictionDetails.map((item, index) => (
              <div key={item.name}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
                    {item.count}
                  </span>
                </div>
                {index < restrictionDetails.length - 1 && (
                  <div className="w-full h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Seccion 3: DATOS ACADÉMICOS */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          DATOS ACADÉMICOS
        </h2>

        {/* Row 1: Carrera y Semestre */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Alumnas por carrera */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Alumnas por carrera</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={carreraData}>
                <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                <Bar dataKey="value" fill="#7F77DD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

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
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Universidades mexicanas</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={universidadesMexData} layout="vertical">
                <XAxis type="number" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} width={70} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
                <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
                <Bar dataKey="value" fill="#378ADD" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Universidades extranjeras */}
          <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Universidades extranjeras</h3>
            <div className="space-y-0">
              {universidadesExtData.map((item, index) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-sm text-gray-700">{item.name}</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
                      {item.count}
                    </span>
                  </div>
                  {index < universidadesExtData.length - 1 && (
                    <div className="w-full h-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seccion 4: DATOS GEOGRÁFICOS */}
        <h2 className="text-xs uppercase text-[#4A0C32] opacity-60 tracking-wide mt-8">
          DATOS GEOGRÁFICOS
        </h2>
        <div className="bg-white border-3 border-[#C4649F] rounded-xl p-4 mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Alumnas por estado</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={estadoData}>
              <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} interval={0} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <YAxis tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#D1D5DB' }} tickLine={{ stroke: '#D1D5DB' }} />
              <Tooltip contentStyle={{ fontSize: '13px', color: '#111827' }} />
              <Bar dataKey="value" fill="#D85A30" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

    </div>
  );
}