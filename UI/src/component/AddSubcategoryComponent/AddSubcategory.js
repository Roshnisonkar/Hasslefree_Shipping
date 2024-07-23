import { useState, useEffect } from 'react';
import axios from 'axios';
import { _subcategoryapiurl,_categoryapiurl } from '../../api.url';
function AddsubCategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cList, setCategoryDetails] = useState([]);
 
  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((response) => {
      setCategoryDetails(response.data);
    }).catch((error) => {
      console.log(error);
    })
  });

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
  }

  return (
    <>
      {/* about section */}

      <section class="about_section">
        <div class="container  ">
          <div class="row">
            <div class="col-md-12">
              <div class="detail-box">
                <div class="heading_container">
                  <br />
                  <h1>Add Sub-Category Here!!!</h1>
                  <font style={{ "color": "blue" }} >{output}</font>
                  <form>
                    <div class="form-group">
                      <label for="catnm">Category Name:</label>
                      <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                        <option>Select Category</option>
                        {
                          cList.map((row) => (
                            <option>{row.catnm}</option>
                          ))
                        }
                      </select>
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="subcatnm">SubCategory Name:</label>
                      <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="file">SubCategory Icon:</label>
                      <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="button" class="btn btn-danger">Add SubCategory</button>
                    <br /><br />
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}

    </>
  );
}

export default AddsubCategory;

