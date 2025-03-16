import { useNavigate } from 'react-router'


const RegistrationPage = () => {
	const navigate = useNavigate()
	function windowF()
	{
		navigate("login")
	}
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-black border text-white p-8 border-gray-800 w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Instagram</h1>
        <p className="text-center text-gray-400 mb-4">
          Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </p>
        <button className="w-full bg-blue-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition">
          <span className="text-white font-semibold">Войти через Facebook</span>
        </button>
        <div className="my-4 flex items-center">
          <hr className="flex-1 border-gray-700" />
          <span className="mx-2 text-gray-400">ИЛИ</span>
          <hr className="flex-1 border-gray-700" />
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Моб. телефон или эл. адрес"
            className="w-full p-2 bg-[#121212] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full p-2 bg-[#121212] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Имя и фамилия"
            className="w-full p-2 bg-[#121212] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Имя пользователя"
            className="w-full p-2 bg-[#121212] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
				onClick={windowF}
            className="w-full bg-blue-500 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4">
          Люди, которые пользуются нашим сервисом, могли загрузить вашу
          контактную информацию в Instagram.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Подробнее
          </a>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Регистрируясь, вы принимаете наши{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Условия
          </a>
          ,{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Политику конфиденциальности
          </a>{" "}
          и{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Политику в отношении файлов cookie
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
