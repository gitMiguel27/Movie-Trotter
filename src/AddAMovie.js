import React, { useState } from "react";

function AddAMovie({ onAddMovie}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState ({
        name: "",
        image: "",
        location: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        // console.log(formData.name)
    }
  
    function handleSubmit(event) {
        event.preventDefault();
      
        if(formData.name === "") {
          setErrorMessage('Error! Complete All Fields');
          setFormData({
            name: "",
            image: "",
            location: ""
        })
        } else if (formData.image === "") {
            setErrorMessage('Error! Complete All Fields');
            setFormData({
                name: "",
                image: "",
                location: ""
            })
        } else if (formData.location === "") {
            setErrorMessage('Error! Complete All Fields');
            setFormData({
                name: "",
                image: "",
                location: ""
            })
        } else {
            
        fetch('http://localhost:3000/movies', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            image: formData.image,
            location: formData.location
          }),
        })
        .then(resp => resp.json())
        .then((newMovie) => onAddMovie(newMovie))

        setFormData({
            name: "",
            image: "",
            location: ""
        })
          // setErrorMessage(null)
        alert("Added to movie list");
      }
    }

    return (
        <div>
        <h1>Add to Movie List</h1>
        {errorMessage && (
            <p className="error"> {errorMessage} </p>
            )}
        <form className="movie-form" onSubmit={handleSubmit}> 
        <label>
          Movie Title:
          <input
            className="capitalize"
            type="text"
            name="name"
            placeholder="Add Title..."
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Location Image:
          <input
            className="capitalize"
            type="text"
            name="image"
            placeholder="Add Location Image..."
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Movie Location:
          <input
            className="capitalize"
            type="text"
            name="location"
            placeholder="Add Location..."
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default AddAMovie;