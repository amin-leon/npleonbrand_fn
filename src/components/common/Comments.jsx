function Comments({ username, comment, date, userimage }) {
  return (
    <div className="flex flex-row gap-3 pt-5">
      <div className="user0image">
        <img
          src={userimage}
          alt=""
          className="w-16 h-16 rounded-md object-cover"
        />
      </div>
      <div className="comment-date ">
        <h3 className="text-black font-bold">{username}</h3>
        <p className="text-sm text-black italic">{comment}</p>
        <p className="text-[#84858E] font-bold text-xs pt-3">{date}</p>
      </div>
    </div>
  );
}

export default Comments;
