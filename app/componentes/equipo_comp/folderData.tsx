'use client'

const FolderData = () => {
    return (
        <div>
            <img
                src="images/equipo_page/folderFigure.svg" 
                alt="folder"
                className="w-25 md:w-25 object-contain"
            />
            <div className="w-20 h-20">
                <img 
                    src="images/test/photoTest.jpg" 
                    alt="test"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

            <p>name</p>
            <p>rol</p>
        </div>

    )
}

export default FolderData;