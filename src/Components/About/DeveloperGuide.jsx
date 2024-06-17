

  const langcode = `
const axios = require('axios'); // legacy way

// Create an Axios instance with the base URL
const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

// Function to get runtimes
const getRuntimes = async () => {
    try {
        const response = await API.get('/runtimes');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching runtimes:', error);
    }
};

getRuntimes();
`;

  const executecode = `import axios from "axios";

// Create an Axios instance with the base URL
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (servercode, serverlang, serverversion) => {
  try {
    const response = await API.post("/execute", {
      language: serverlang,
      version: serverversion,
      files: [
        {
          content: servercode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};
`;

  return (
    <div className=" xs:px-2 md:px-5 lg:px-10 font-mono">
      <h1 className="text-center text-2xl font-bold font-mateSc">
        Guide to the Developer Who Tries to Recreate a Code Editor
      </h1>
      <section className="fle gap-2 justify-center items-center">
        <h2 className="text-xl font-mate">Reference YouTube Video</h2>
        <a
          className="flex gap-2 justify-center items-cente bg-black text-white rounded-md py-1 px-2"
          href="https://youtu.be/THgBePRV13o?si=zavqhK_-B4piPSsS"
        >
          Watch
          <div>
            <FaYoutube size={25} color="red" />
          </div>
        </a>
      </section>
      <hr className="h-1 bg-black border-none mt-1"></hr>
      <span className="py-2"></span>
      <section className="py-2">
        <h2 className="text-xl font-mate">
          Build a Basic UI to Display the Languages , Themes , Input and Output
          Display
        </h2>
      </section>
      <hr className="h-1 bg-black border-none"></hr>
      <span className="py-2"></span>
      <section className="py-2">
        <h2 className="text-xl font-mate">Guide to Using the Piston API</h2>
        <a
          className="flex gap-2 justify-center items-cente bg-black text-white rounded-md py-1 px-2"
          href="https://piston.readthedocs.io/en/latest/api-v2/"
        >
          Visit Piston API Documentation
          <FontAwesomeIcon
            icon={faLocationArrow}
            size="xl"
            style={{ color: "#FFD43B" }}
          />
        </a>

        <h3 className="py-2">
          To get the list of supported languages and versions, use the code
          below:
        </h3>

        <SyntaxHighlighter language="javascript" style={materialDark}>
          {langcode}
        </SyntaxHighlighter>
        <h3>To get the list of supported themes, visit the webpage:</h3>
        <a
          className="flex gap-2 justify-center items-cente bg-black text-white rounded-md py-1 px-2"
          href="https://gist.github.com/RyanNutt/cb8d60997d97905f0b2aea6c3b5c8ee0"
        >
          Supported Themes
          <FontAwesomeIcon
            icon={faLocationArrow}
            size="xl"
            style={{ color: "#FFD43B" }}
          />
        </a>
        <p className="text-center">or</p>
        <a
          className="flex gap-2 justify-center items-cente bg-black text-white rounded-md py-1 px-2"
          href="https://github.com/Akilraj-1153/Code-Editor/blob/main/src/Data/Data.js"
        >
          Get it from this GitHub repo
          <FontAwesomeIcon
            icon={faLocationArrow}
            size="xl"
            style={{ color: "#FFD43B" }}
          />
        </a>
      </section>
      <section>
        <h2>To Execute Code use the code below:</h2>
        <SyntaxHighlighter language="javascript" style={materialDark}>
          {executecode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default DeveloperGuide;
