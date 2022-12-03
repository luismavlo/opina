
const getConfig = () => ({
    headers: {
        'xtoken': `${localStorage.getItem('token')}`
    }
});

export default getConfig
