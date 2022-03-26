const Search = (props) => {

    const value = (e) => {
        const location = e.target.previousElementSibling.value
        props.serc(location)
    }

    return ( 
        <section className="container-fluid" >
            <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Location" aria-label="Recipient's username" aria-describedby="button-addon2" autoFocus />
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={value}>Button</button>
            </div>
        </section>
     );
}
 
export default Search;