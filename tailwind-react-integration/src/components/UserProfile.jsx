function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg">
      <img
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
        src="images/profile-picture.jpg"
        alt="User"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 text-center">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm md:text-base text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
