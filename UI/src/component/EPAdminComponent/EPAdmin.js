import { useEffect, useState } from "react";
import axios from "axios";
import { _userapiurl } from "../../api.url";
import { useNavigate } from "react-router-dom";

function EPAdmin() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output,setOutput] = useState();
 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email")).then((response) => {
      setName(response.data[0].name);
      setEmail(response.data[0].email);
      setAddress(response.data[0].address);
      setCity(response.data[0].city);
      setMobile(response.data[0].mobile);
      setGender(response.data[0].gender);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleData = () => {
    let updateDetail = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city, "gender": gender } };
    axios.patch(_userapiurl + "update", updateDetail).then((response) => {
      navigate("/epadmin");
    }).catch((error) => {
      console.log(error);
    })

  }

  return (
    <>
      {/* about section */}

      <section class="about_section">
        <div class="container  ">
          <div class="row">
            <div class="col-md-12">
              <h1>Edit Profile Here!!!</h1>
              <br />
              <font color="blue">{output}</font>
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="mobile">Mobile:</label>
                  <input type="text" class="form-control" value={mobile}
                    onChange={e => setMobile(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="address">Address:</label>
                  <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
                </div>
                <div class="form-group">
                  <label for="city">City:</label>
                  <select class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                    <option>Select City</option>
                    <option>Indore</option>
                    <option>Ujjain</option>
                    <option>Dewas</option>
                    <option>Nagda</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="gender">Gender:</label>
                  &nbsp;&nbsp;
                  Male <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />
                  &nbsp;&nbsp;
                  Female <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />
                </div>
                <button onClick={handleData} type="button" class="btn btn-primary">Submit</button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}

    </>
  );
}

export default EPAdmin;

