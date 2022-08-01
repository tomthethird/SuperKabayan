document.getElementById("savingsContainer").innerHTML = 
`<div class="p-3 snip-card rounded-4 mt-3" id="boxContainer">
  <h3 class="fw-bolder" id="savings1Name"></h3>
  <div class="progress rounded-5" style="height: 30px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="d-flex flex-wrap justify-content-between mt-3">
    <h5 id="savings1Deposit"></h5>
    <h5 id="savings1Goal"></h5>
  </div>
  <div class="mt-2 d-flex justify-content-end">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Deposit</button>
  </div>
</div>`;