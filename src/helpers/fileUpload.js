export const fileUpload = async (file) => {

    const cloudUrl = 'http://localhost:4000/api/v1/uploads/';

    const formData = new FormData();
    formData.append('archivo', file);
    console.log(formData)

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        console.log(resp)

    } catch (error) {
        throw error;
    }

}