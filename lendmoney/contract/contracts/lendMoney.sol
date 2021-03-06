pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract lendMoney{
    
struct Loan {
    uint256 amount;
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
    
    Loan[] everyLoan;
    address[] allLoaners;
    address[] allDebtors;
    
    function getLoanCount() public view returns (uint){
            return CurLoanCount;
    }
    //add params
    function startLoan(address payable _loaner, address payable _debtor, uint _amount, uint _interest, uint _duedate, uint _condition, address loanerprivkey, address debtorprivkey) public payable returns (uint256){
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
        
        everyLoan.push(newloan);
        allloans[CurLoanCount] = newloan;
        allLoaners.push(_loaner);
        allDebtors.push(_debtor);
        loaners[loanerprivkey] = _loaner;
        debtors[debtorprivkey] = _debtor;
        
        
        
        CurLoanCount++;
        
        return everyLoan.length;
    }
    
    



    function endLoan(uint index) public payable{
        Loan storage  tmploan = allloans[index];
        require(msg.sender == tmploan.loaner, "Only the loaner can call this function. Debtor must requets an end to the loan");
        
         address payable loaner = tmploan.loaner;
        uint interest = tmploan.interest * tmploan.amount;
        
        loaner.transfer(tmploan.amount + interest);
        CurLoanCount--;
    }
    
    
    
    
    function requestEnd(uint index) public payable{
        Loan storage  tmploan = allloans[index];
        if(!tmploan.loanFinished){
        require(msg.sender == tmploan.debtor);
        tmploan.requestEnd = true;        
        }
    }
    
    function confirmEnd(uint index, bool option) public payable{ 
        Loan storage  tmploan = allloans[index];
        require(msg.sender == tmploan.loaner, "Only the Loaner May call this function");
        if(!tmploan.loanFinished){
        if(tmploan.requestEnd){
                tmploan.loanFinished = true;
                tmploan.debtor.transfer(tmploan.amount);
            }   
        }
        
    }
    function acceptLoan(uint index)  public payable returns(uint256){
        Loan storage tmp = everyLoan[index];    
        tmp.condition = 2;
        tmp.loaner.transfer(tmp.amount);
    
    }
    
    function payLoan(uint index, address payable loaner) public payable returns(bool){
        //require that sender has the money 
        require(msg.value != 0 && msg.value > 0, "Amount must be non negative and greater than one");        
        Loan storage tmploan = allloans[index];
        Loan storage t2 = everyLoan[index];        
        require(!t2.loanFinished, "you have paid this loan already");
        t2.loanFinished = true;        
        t2.condition = 3;            
        loaner.transfer(msg.value);
        return true;
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
    
    function func() public view returns(uint count){
        return everyLoan.length;
    }
    function getAllLoans() public view returns(Loan[] memory){
        return everyLoan;
    }
    
    function getNumLoans() public view returns(uint){
        return CurLoanCount;
    }
    // function checkLoan(uint index) public returns( uint amount,
    // address payable loaner,
    // address payable debtor, 
    // uint _index,
    // uint interest,
    // uint dueDate,
    // uint condition,
    // bool loanFinished,
    // bool requestEnd){
        
    function checkLoan() public returns(uint256){
    //Loan memory tmploan = allloans[index];
    uint curtime = 0;
    
    for(uint i = 0;i<everyLoan.length;i++){
    }
    
    
    return curtime;
    // return(tmploan.amount,tmploan.loaner, tmploan.debtor, tmploan.index, tmploan.interest, tmploan.dueDate, tmploan.condition, tmploan.loanFinished, tmploan.requestEnd); 
    }
    
    
    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
    
        assembly {
            result := mload(add(source, 32))
        }
    }

}
    
    //check below comment on how a date is a uint (below is needed for frontend interaction with the contract)
    //https://ethereum.stackexchange.com/questions/32173/how-to-handle-dates-in-solidity-and-web3
    
