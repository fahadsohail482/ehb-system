import "./styles.css";
export default function SignUp() {
  return (
    <div className="box">
      <div id="divleft">
        <h2>ONLINE EVENT HALL BOOKING MANAGEMENT SYSTEM</h2>
      </div>
      <div id="divright">
        <h1>Register</h1>
        <p> Manage all your bookings efficiently </p>
        <form name="booking_form" method="get">
          <div className="box1">
            <label for="fname">First Name</label>
            <input type="text" name="fname" />
          </div>
          <div className="box2">
            <lable for="lname">Last Name</lable>
            <input type="text" name="lname" />
          </div>
          <div className="box3">
            <lable for="phone">Phone Number</lable>
            <input type="tel" name="phone" />
          </div>
          <div className="box4">
            <lable for="email">Email</lable>
            <input type="email" name="email" />
          </div>
          <div className="box5">
            <lable for="password">Password</lable>
            <input type="password" name="password" />
          </div>
          <div className="box6">
            <lable for="confirmpassword">Confirm password</lable>
            <input type="password" name="password" />
          </div>
        </form>
        <br />
        <button>Create Account</button> <br />
        <br />
        Already have an account?<a> Log in </a>
      </div>
    </div>
  );
}
