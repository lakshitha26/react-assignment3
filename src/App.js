import { faker } from '@faker-js/faker';
import './App.css';

const App=()=> {
  return (<center>
    <table  border="1" class="ui very basic collapsing celled table" style={{marginTop:"5%",}}>
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={faker.image.avatar()} alt=""class="ui mini rounded image"/>
          <div class="content">
            Lena
            <div class="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={faker.image.avatar()}alt="" class="ui mini rounded image"/>
          <div class="content">
            Matthew
            <div class="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={faker.image.avatar()} alt=""class="ui mini rounded image"/>
          <div class="content">
            Lindsay
            <div class="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={faker.image.avatar()} alt=""class="ui mini rounded image"/>
          <div class="content">
            Mark
            <div class="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
</table></center>
  );
}

export default App;
