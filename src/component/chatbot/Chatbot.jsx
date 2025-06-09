import React, { useEffect, useState } from "react";
import "./Chatbot.css"; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you find a product today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

 
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );

  
    if (searchResults.length > 0) {
      const responseText = searchResults
        .map((item) => `• ${item.title} - $${item.price}`)
        .join("\n");
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Here are some products:\n${responseText}` }
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, no matching products found." }
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
     
      <button className="chatbot-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Chat"}
      </button>

    
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">Product Assistant</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender}`}
              >
                <div className="chatbot-message-content">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask me..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="chatbot-send-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
