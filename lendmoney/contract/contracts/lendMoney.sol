pragma solidity ^0.5.0;

contract lendMoney{

struct Loan {
    uint amount;
    address payable loaner;
    address payable debtor;
    uint index;
    uint interest;
    uint dueDate;
    uint condition;
    bool loanFinished;
    bool requestEnd;
}
    uint CurLoanCount = 0;
    mapping(address => address) loaners;
    mapping(address => address) debtors;

    mapping(uint => Loan) allloans;

    address[] allLoaners;
    address[] allDebtors;

    //add params
    function startLoan(address payable _loaner, address payable _debtor, uint _amount, uint _interest, uint _duedate, uint _condition, address loanerprivkey, address debtorprivkey) public payable returns (uint){
        Loan memory newloan =  Loan({
           amount: _amount,
           loaner: _loaner,
           debtor: _debtor,
           index: CurLoanCount,
           interest: _interest,
           dueDate: _duedate,
           condition: _condition,
           loanFinished: false,
           requestEnd: false
        });
        //we need a way to have this function alert the debtor/loaner. or maybe just handle that all on the front end
        allloans[CurLoanCount] = newloan;
        allLoaners.push(_loaner);
        allDebtors.push(_debtor);
        loaners[loanerprivkey] = _loaner;
        debtors[debtorprivkey] = _debtor;

        _debtor.transfer(msg.value);

        CurLoanCount++;

        return newloan.index;
    }

    function endLoan(uint index) public payable{
        Loan storage  tmploan = allloans[index];
        require(msg.sender == tmploan.loaner, "Only the loaner can call this function. Debtor must requets an end to the loan");

        // //lay loaner from debtor
        address payable debtor = tmploan.debtor;
        debtor.transfer(tmploan.amount);
        //take money from debtor
        //give money to loaner
    }



    function requestEnd(uint index) public payable{
        Loan storage  tmploan = allloans[index];
        require(msg.sender == tmploan.debtor);
        tmploan.requestEnd = true;
    }

    function confirmEnd(uint index, bool option) public payable{
        Loan storage  tmploan = allloans[index];
        require(msg.sender == tmploan.loaner, "Only the Loaner May call this function");
        if(tmploan.requestEnd){
            tmploan.loanFinished = true;
            tmploan.debtor.transfer(tmploan.amount);
        }

    }


    function payLoan(uint index) public payable{
        //require that sender has the money
        require(msg.value != 0 && msg.value > 0, "Amount must be non negative and greater than one");
        Loan storage  tmploan = allloans[index];
        uint amount = msg.value;
        uint change = 0;
        if(amount > tmploan.amount){
            tmploan.amount = 0;
            change = amount - tmploan.amount;
        }
        if(change!=0){
            //if the debtor
            tmploan.debtor.transfer(change);
        }
    }

    function payLoan(uint index, uint amount) public payable{

    }


    function getDebtor(uint  debtorID) public returns (address) {
        Loan storage  tmploan = allloans[debtorID];
        return tmploan.debtor;
    }

    function getLoaner(uint  loanerID) public returns(address) {
        Loan storage  tmploan = allloans[loanerID];
        return tmploan.loaner;
    }


    function getAllLoaners() public view returns (address[] memory){
        return allLoaners;
    }

    function getAllDebtors() public view returns (address[] memory){
        return allDebtors;
    }


    function checkLoan(uint index) public returns( uint amount,
    address payable loaner,
    address payable debtor,
    uint _index,
    uint interest,
    uint dueDate,
    uint condition,
    bool loanFinished,
    bool requestEnd){
                        Loan storage  tmploan = allloans[index];
                return(tmploan.amount,tmploan.loaner, tmploan.debtor, tmploan.index, tmploan.interest, tmploan.dueDate, tmploan.condition, tmploan.loanFinished, tmploan.requestEnd);

    }
    //check below comment on how a date is a uint (below is needed for frontend interaction with the contract)
    //https://ethereum.stackexchange.com/questions/32173/how-to-handle-dates-in-solidity-and-web3

}
