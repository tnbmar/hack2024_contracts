// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TableFootballTournament {
    address public admin;
    uint public creationFee;
    uint public tournamentCount = 0;
    uint public serviceCommission = 10; // 10% service commission

    struct Tournament {
        uint id;
        string name;
        uint prizePool;
        bool isFinished;
        address[] participants;
        mapping(address => bool) isParticipant;
    }

    mapping(uint => Tournament) public tournaments;

    constructor(uint _creationFee) {
        admin = msg.sender;
        creationFee = _creationFee;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function.");
        _;
    }

    // Create a new tournament with a specified name.
    function createTournament(string memory _name) external payable {
        require(msg.value == creationFee, "Must pay the creation fee.");

        tournamentCount++;
        Tournament storage newTournament = tournaments[tournamentCount];
        newTournament.id = tournamentCount;
        newTournament.name = _name;

        // Transfer creation fee to the admin as a commission for creating the tournament.
        payable(admin).transfer(msg.value);
    }

    // Allow sponsors to fund the tournament prize pool.
    function sponsorTournament(uint _tournamentId) external payable {
        Tournament storage tournament = tournaments[_tournamentId];
        require(!tournament.isFinished, "Tournament is already finished.");
        tournament.prizePool += msg.value;
    }

    // Add participants to the tournament.
    function addParticipant(uint _tournamentId, address _participant) external onlyAdmin {
        Tournament storage tournament = tournaments[_tournamentId];
        require(!tournament.isFinished, "Tournament is already finished.");
        require(!tournament.isParticipant[_participant], "Participant already added.");

        tournament.participants.push(_participant);
        tournament.isParticipant[_participant] = true;
    }

    // Distribute the prize pool among the winners and participants.
    function distributePrizes(uint _tournamentId, address[] memory _winners) external onlyAdmin {
        Tournament storage tournament = tournaments[_tournamentId];
        require(!tournament.isFinished, "Tournament is already finished.");

        uint totalPrize = tournament.prizePool;
        uint commission = (totalPrize * serviceCommission) / 100;
        uint prizePoolAfterCommission = totalPrize - commission;

        // Simplified distribution: equally among winners for demonstration.
        uint winnerPrize = prizePoolAfterCommission / _winners.length;
        for(uint i = 0; i < _winners.length; i++) {
            payable(_winners[i]).transfer(winnerPrize);
        }

        // Transfer commission to admin.
        payable(admin).transfer(commission);

        tournament.isFinished = true;
    }

    // Function to get tournament details.
    function getTournamentDetails(uint _tournamentId) external view returns (string memory name, uint prizePool, bool isFinished, address[] memory participants) {
        Tournament storage tournament = tournaments[_tournamentId];
        return (tournament.name, tournament.prizePool, tournament.isFinished, tournament.participants);
    }
}
