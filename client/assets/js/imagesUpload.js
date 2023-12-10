const uploadFiles = async (files) => {
  const url = "http://localhost:8080/api/upload"; // Replace with your server URL
  const formData = new FormData();

  for (const file of files) {
    formData.append("images", file, file.name);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successfully uploaded", data);
  } catch (error) {
    console.error("Error during file upload:", error);
  }
};

export default uploadFiles;