import "./styles1.css";
export default function Signin() {
  return (
    <div className="box">
      <div id="divleft">
        <h2>ONLINE EVENT HALL BOOKING MANAGEMENT SYSTEM</h2>
      </div>
      <div id="divright">
        <h1>Register</h1>
        <p> Manage all your bookings efficiently </p>
        <br />
        <form name="booking_form" method="get">
          <div className="box1">
            <label for="fname"></label>
            <input type="text" placeholder="Email address or phone number" />
          </div>
          <br />
          <div className="box5">
            <lable for="password"></lable>
            <input type="password" placeholder="Password" />
          </div>
          <br />
          <button>Log In</button> <br />
          <br />
          <a href="Forgotten Password">Forgotten password? </a>
        </form>
        <br />
        <br />
        <button>Create New Account</button> <br />
        <br />
      </div>
    </div>
  );
}
