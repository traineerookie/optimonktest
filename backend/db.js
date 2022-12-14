const db = [
  {
    id: 123,
    url: "http://localhost:5173/",
    component: `<div class="modal">
        <p class="message">Look at this fancy pop-up</p>
        <div class="options">
          <button class="btn">Yes</button>
          <button class="btn">No</button>
        </div>
      </div>`,
    styles: `
        .modal {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: auto;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 1.6rem 3rem;
          border: 3px solid black;
          border-radius: 5px;
          background: white;
          box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .message {
          font-size:1.1rem;
          margin-bottom: 1.6rem;
          margin-top: 0;
        }
        .btn {
          color:inherit;
            font-family:inherit;
          font-size: inherit;
          background: white;
          padding: 0.3rem 3.4rem;
          border: 3px solid black;
          margin-right: 2.6rem;
          box-shadow: 0 0 0 black;
          transition: all 0.2s;
        }
        
        .btn:last-child {
          margin: 0;
        }
        
        .btn:hover {
          box-shadow: 0.4rem 0.4rem 0 black;
          transform: translate(-0.4rem, -0.4rem);
        }
        
        .btn:active {
          box-shadow: 0 0 0 black;
          transform: translate(0, 0);
        }
        
        .options {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }`,
    events: [
      {
        id: 1,
        trigger: "exit-intent",
        rules: {},
      },
      {
        id: 2,
        trigger: "selector",
        rules: 
          {
            type: "selector",
            activity: "body",
          }
        ,
      },
    ],
  },
  {
    id: 124,
    url: "http://local:5173/",
    component: "script124.js",
    styles: "styles124.css",
    rules: [
      {
        id: 1,
        trigger: "exit-intent",
      },
      {
        id: 2,
        trigger: "selector",
        selector: "body",
      },
    ],
  },
];

module.exports = db;
