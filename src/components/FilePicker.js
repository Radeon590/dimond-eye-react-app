function FilePicker(){
    function pickFile(event){
        const file = event.target.files[0];
        console.log(file.name);
        console.log('start loading')
        const data = new FormData()
        data.append('file', file)
        fetch('http://localhost:3000/upload',
        {
            method: 'POST',
            body: data
        }).then(function(response){
            return response.text()
        }).then(
            function(data){
                console.log(data)
            }
        ).catch(function(error){
            console.log('error')
        });
    }

    return(
        <input name="filePicker" type="file" accept=".mp4" onChange={ pickFile }/>
    );
}

export default FilePicker;