const Settings = () => {
  return (
    <div className="text-left">
      <div className="workMinutes">
        <label>Work Minutes: </label>
        <input type="range" min={0} max="100" value="50" className="range" />
      </div>

      <div className="breakMinutes">
        <label>Break Minutes: </label>
        <input type="range" min={0} max="100" value="50" className="range " />
      </div>
    </div>
  );
};

export default Settings;
