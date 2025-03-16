import React from "react";
import { useNavigate } from 'react-router'

const InstagramLogin: React.FC = () => {
	const navigate = useNavigate()
	function windowF()
	{
		navigate("/")
	}
	function windowN()
	{
		navigate("/layout")
	}
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-96 p-8 bg-black text-white border border-gray-800 shadow-md">
        {/* Логотип */}
        <h1 className="text-4xl font-bold text-center mb-6 font-serif">Instagram</h1>

        {/* Поля ввода */}
        <form onSubmit={windowN} className="space-y-4">
          <input
            type="text"
            placeholder="Телефон, имя пользователя или эл. адрес"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type='submit' className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Войти
          </button>
        </form>

        {/* Разделитель */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="mx-2 text-gray-400">ИЛИ</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Вход через Facebook */}
        <button className="w-full flex items-center justify-center gap-2 text-blue-400 font-semibold hover:underline">
          🔵 Войти через Facebook
        </button>

        {/* Ссылка "Забыли пароль?" */}
        <p className="text-center mt-3">
          <a href="#" className="text-blue-400 hover:underline">Забыли пароль?</a>
        </p>

        {/* Регистрация */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            У вас нет аккаунта?{" "}
            <span onClick={windowF} className='text-blue-500 hover:underline cursor-pointer'>Зарегистрироваться</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;
