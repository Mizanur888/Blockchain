pragma solidity ^0.5.0;

contract lendMoney{
    
struct Loan {
    uint amount;
    address loaner;
    address debtor; 
    uint index;
    uint interest;
    uint dueDate;
    bytes32 condition; 
    bool loanFinished;
    bool requestEnd;
}
    uint CurLoanCount;
    mapping(address => address) loaners;
    mapping(address => address) debtors;

    mapping(uint => Loan) allloans;
    
    address[] allLoaners;
    address[] allDebtors;
    
    //add params
    function startLoan(address _loaner, address _debtor, uint _amount, uint _interest, uint _duedate, bytes32 _condition, address loanerprivkey, address debtorprivkey) public payable{
        CurLoanCount++;
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
    }
    
    
    function endLoan(uint index) public payable{
        
    }
    
    function requestEnd(uint index) public payable{
        
    }
    
    function confirmEnd(uint index, bool option) public payable{ 
        
    }
    function payLoan(uint index) public payable{
        
    }
    
    
    function getDebtor(uint  debtorID) public {
        
    }
    
    function getLoaner(uint  loanerID) public {
        
    }
    
    
    function getAllLoaners() public view {
        
    }
    function getAllDebtors() public view {
        
    }
    
    
    function checkLoan(uint index) public view{
        
    }
    //check below comment on how a date is a uint (below is needed for frontend interaction with the contract)
    //https://ethereum.stackexchange.com/questions/32173/how-to-handle-dates-in-solidity-and-web3
    
}