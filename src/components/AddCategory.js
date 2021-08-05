import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

export const AddCategory = ({ setcategories }) => {

    const handleAddGifs = (e) => {
        e.preventDefault();
        const valueInput = document.querySelector('#searchInput').value;
        console.log(valueInput);
        if (valueInput.length > 0) {
            setcategories((cats) => [valueInput, ...cats]);
            document.querySelector('#searchInput').value = '';
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'agrega algo al cuadro de busqueda',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    return (
        <form>
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="encontrar por nombre"
                    id="searchInput"
                />
                <button onClick={handleAddGifs}>add gifs</button>
            </div>
        </form>
    )
}


AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}