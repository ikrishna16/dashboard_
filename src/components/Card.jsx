const Card = ({ title, value, color, icon }) => {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
                >
                  {title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {value}
                </div>
              </div>
              <div className="col-auto">
                <span className="material-symbols-outlined" style={{fontSize: "35px"}}>{icon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
