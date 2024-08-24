export const fetchMiserables = async () => {
    const response = await fetch('/datasets/miserables.json');
    const data = await response.json();
    return data;
};

