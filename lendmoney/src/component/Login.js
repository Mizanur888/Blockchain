import React, { Component } from "react";
class Login extends Component {
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          margin: "10px",
          paddingLeft: "20px",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <div class="form-group">
          <label for="address">privateKey</label>
          <input
            type="address"
            class="form-control"
            id="address"
            placeholder="address"
          />
        </div>
        <div class="form-group">
          <label for="privateKey">privateKey</label>
          <input
            type="password"
            class="form-control"
            id="privateKey"
            placeholder="privateKey"
          />
        </div>
        <div class="form-group">
          <label for="state">Options</label>
          <select class="form-control" id="state">
            <option>Loaner</option>
            <option>Debter</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mb-2">
          submit
        </button>
      </form>
    );
  }
}

export default Login;
