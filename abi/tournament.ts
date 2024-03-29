export const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_creationFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_participant",
        type: "address",
      },
    ],
    name: "addParticipant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createTournament",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "creationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_winners",
        type: "address[]",
      },
    ],
    name: "distributePrizes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "getTournamentDetails",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "prizePool",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "participants",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceCommission",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentId",
        type: "uint256",
      },
    ],
    name: "sponsorTournament",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "tournamentCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tournaments",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "prizePool",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
