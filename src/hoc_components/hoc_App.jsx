import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import ThemeModal from "./components/ThemeModal";
import WarningModal from "./components/WarningModal";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  const close = () => setIsOpen(false);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center gap-4 my-4">
        <button
          onClick={() => {
            setIsOpen("login");
          }}
          className="bg-danger"
        >
          Giriş Yap
        </button>
        <button
          onClick={() => {
            setIsOpen("darkmode");
          }}
          className="bg-secondary"
        >
          Tema Seç
        </button>
        <button
          onClick={() => {
            setIsOpen("warning");
          }}
          className="bg-primary"
        >
          Uyarı Ver
        </button>
      </div>
      {/* BU 1. YOL UZUN KOD TEKRARI İÇERİR */}
      {isOpen === "login1" ? (
        <LoginModal close={() => setIsOpen(false)} />
      ) : isOpen === "darkmode1" ? (
        <ThemeModal close={() => setIsOpen(false)} />
      ) : isOpen === "warning1" ? (
        <WarningModal close={() => setIsOpen(false)} />
      ) : (
        ""
      )}

      {/* 2. YOL HOC KULLNADIK */}

      {isOpen === "login" ? (
        <Modal close={close}>
          <div>
            <label>İsminiz</label>
            <input className="form-control shadow" />
          </div>{" "}
        </Modal>
      ) : isOpen === "darkmode" ? (
        <Modal close={close}>
          <h2>Tema Seçiniz</h2>
          <select className="form-select shadow">
            <option>Koyu</option>
            <option>Açık</option>
          </select>
        </Modal>
      ) : isOpen === "warning" ? (
        <Modal close={close}>
          <h2>Bir hata oluştu</h2>
          <p>Api isteğinde 404 hatası mevcut</p>
          <p>Daha sonra deneyiniz</p>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
