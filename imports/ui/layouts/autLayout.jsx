import React from "react";

export const authLayout = ({content}) => {
    return(
        <div>
            <h1 className='text-center'>Добро пожаловать</h1>
                {content()}
        </div>
    )
}

