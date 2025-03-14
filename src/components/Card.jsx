function Card({data, like}){
    return (

        <div className="card !p-0 !m-0">
          <div className="card-header md:shrink-0 border-none md:!h-64 !p-0 !m-0 relative">
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            <img className="w-full h-full object-cover rounded-lg" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}   />
            <span className="text-xs bg-fuchsia-600 text-white rounded-full py-1 px-2 absolute top-2 left-2">{data.original_language}</span>
            <span className="text-xs bg-fuchsia-600 text-white rounded-full py-1 px-2 absolute top-2 right-2">{data.like ? "❤️" : "❤"}</span>
          </div>
          <div className="card-body">
            <h3 className="font-semibold text-fuchsia-600 mb-2 text-md">{data.title}</h3>
            <p className="text-sm">{data.overview}</p>
          </div>
          <div className="card-footer flex justify-between items-center">
            <span className="text-xs text-slate-400">{data.release_date}</span>    
            <a href="#" className="btn-outline !p-2 !text-xs">Learn More +</a>
          </div>
        </div>
    )
}

export default Card;