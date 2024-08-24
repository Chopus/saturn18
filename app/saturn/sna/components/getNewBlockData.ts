export const fetchBlockData = async () => {
    const response = await fetch('/datasets/blocks-multi.json');
    const data = await response.json();
    return data;
};

