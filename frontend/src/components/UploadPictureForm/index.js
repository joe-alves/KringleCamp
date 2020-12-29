import {fetch} from "../../store/csrf";

const UploadPictureForm = () => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            
        }}>
            <input type="file" onChange={async (event) => {
                const rawInputElement = event.target;
                const theFileToUpload = rawInputElement.files[0];
                
                const formData = new FormData();
                formData.append("bubblebop", theFileToUpload);

                await fetch("/temp", { 
                    method: "POST",
                    body: formData
                });
            }} />
            <img src="https://kringlecampfiles.s3.us-east-2.amazonaws.com/1609280030194.jpg" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UploadPictureForm;