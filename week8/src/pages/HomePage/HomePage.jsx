import React from "react";
import './HomePage.css';
import image from "../../assets/Jihye.png";

function HomePage() {
  return (
      <main>
        <div className="text-container">
          <h2>Welcome to Jihaeee!</h2>
          <article>
            "Hi, I'm 13th Likelion, a Frontend Developer."
          </article>
        </div>
        <div className="card-container">
          <div className="card">프</div>
          <div className="card">론</div>
          <div className="card">트</div>
          <div className="card">사</div>
          <div className="card">자</div>
          <div className="card">는</div>
          <div className="card">어</div>
          <div className="card">
            <img src={image} alt="아기사자" />
          </div>
          <div className="card">흥</div>
        </div>
      </main>
  );
}

export default HomePage;
