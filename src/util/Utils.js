function getRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b})`;
}

function getBase64Url(file) {
    const result = {
        url: '',
    };
    const fileReader = new FileReader();
    fileReader.onload = () => {
        result.url = fileReader.result;
    };
    fileReader.readAsDataURL(file);
    return result;
}


export default {
    getRGBColor,
    getBase64Url,
};
