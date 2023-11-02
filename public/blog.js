const form = document.getElementById("blogform");

//handler for form submit event

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    const obj = {
      title: title,
      author: author,
      content: content,
    };

    const response = await axios.post("http://localhost:3000/blog", obj);
    const allblogs = response.data.allblogs;
    console.log(allblogs);
    showUserOnScreen(allblogs);
  } catch (err) {
    console.log(err);
  }
});

async function showUserOnScreen() {
  const itemList = document.getElementById("itemlist");
  itemList.innerHTML = "";

  const response = await axios.get("http://localhost:3000/previous-blog");
  const blogs = response.data.blogs;

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const li = document.createElement("li");
    li.className =
      "relative border p-4 mb-4 bg-gradient-to-r from-yellow-200 via-pink-400 to-pink-300 rounded shadow-xl"; // Apply Tailwind CSS classes here

    const titleDiv = document.createElement("div");
    titleDiv.className = "font-bold mb-2 text-xl";
    titleDiv.textContent = blog.title;

    const maximisebutton = document.createElement("button");
    maximisebutton.className =
      "absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2 mr-2";
    maximisebutton.innerText = "+";

    maximisebutton.addEventListener("click", () => {
      const content = document.createElement("div");
      content.className = " flex flex-col items-start";
      const contentDiv = document.createElement("div");
      contentDiv.className = "text-red-700 font-bold"; // Add margin-bottom for spacing
      contentDiv.textContent = `Author: ${blog.author}`;

      const contentPara = document.createElement("p");
      contentPara.className = "text-lg mt-4"; // Apply desired font size
      contentPara.textContent = `${blog.content}`;

      const label = document.createElement("label");
      label.className = "text-black font-bold";
      label.innerHTML = "Comment :";

      const subcontainer = document.createElement("div");
      subcontainer.className = "flex flex-row";

      const comment = document.createElement("input");
      comment.className = "border p-2 my-2 rounded";
      comment.type = "text";
      comment.id = "comment1";

      const sendButton = document.createElement("button");
      sendButton.className =
        "bg-black hover:bg-green-700 text-white font-bold  rounded mr-2 my-2.5 px-2 ml-2";
      sendButton.innerText = "Send";
      sendButton.id="send"
      sendButton.type = "submit";

      subcontainer.appendChild(comment);
      subcontainer.appendChild(sendButton);
      const minimizeButton = document.createElement("button");
      minimizeButton.className =
        "absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded text-lg mt-2 mr-2"; // Add margin-top for spacing
      minimizeButton.innerText = "-";
      minimizeButton.addEventListener("click", () => {
        li.removeChild(contentDiv);
        li.removeChild(contentPara);
        li.removeChild(minimizeButton);
        //   li.removeChild(comment)
        //   li.removeChild(sendButton)
        li.removeChild(subcontainer);
        li.removeChild(label);
        maximisebutton.style.display = "block";
      });

      maximisebutton.style.display = "none";

      li.appendChild(content);
      li.appendChild(contentDiv);
      li.appendChild(contentPara);
      li.appendChild(label);
      // li.appendChild(comment);
      // li.appendChild(sendButton);
      li.appendChild(subcontainer);
      li.appendChild(minimizeButton);

      const form2 = document.getElementById("comment1");
   
      sendButton.addEventListener("click", async (e) => {//send button has been taken inplace of form2 cause we are using send button and the attribute of addlisten event should be click because this is not a form this is button so when click happens then this anonymous fn would be call
        e.preventDefault();

        const comment1 = document.getElementById("comment1").value;

        const obj2 = {
          comment1: comment1,
        };
        console.log(obj2);
        const response = await axios.post(
          "http://localhost:3000/comment",obj2
        );
      });
    });

    // content.appendChild(deleteButton);

    li.appendChild(titleDiv);
    // comment.style.display='none'
    // sendButton.style.display='none'
    li.appendChild(maximisebutton);

    itemList.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  showUserOnScreen();
});
