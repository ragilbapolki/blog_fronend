export const getPosts = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/posts');
    const data = await response.json();
    return data;
};

export const getPost = async (id) => {
    const response = await fetch(`http://localhost/api/posts/${id}`);
    const data = await response.json();
    return data;
};
