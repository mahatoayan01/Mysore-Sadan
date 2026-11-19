// Sample orders and payment history for the Owner Dashboard
// Plainly labeled "Sample data" as per Step 4 requirements

export const sampleOrders = [
  {
    id: "ORD-9201",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Aditya Joshi",
      phone: "+91 98230 11223",
      address: "Flat 402, Shreeram Residency, Sadashiv Peth, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Ghee Garlic Roast Dosa", quantity: 2, price: 130 },
      { name: "Authentic South Indian Filter Coffee", quantity: 2, price: 35 }
    ],
    subtotal: 330,
    deliveryFee: 30,
    taxes: 16.5,
    total: 376.5,
    status: "Delivered",
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T08:15:00.000Z",
    formattedTime: "Today, 08:15 AM"
  },
  {
    id: "ORD-9202",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Sneha Kulkarni",
      phone: "+91 94220 55441",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Special Mysore Masala Dosa", quantity: 1, price: 120 },
      { name: "Ghee Pineapple Shira", quantity: 1, price: 65 }
    ],
    subtotal: 185,
    deliveryFee: 0,
    taxes: 9.25,
    total: 194.25,
    status: "Delivered",
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T08:42:00.000Z",
    formattedTime: "Today, 08:42 AM"
  },
  {
    id: "ORD-9203",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Vikram Deshmukh",
      phone: "+91 98811 77665",
      address: "12, Tilak Road, Opposite SP College, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Steamed Idli Sambar (2 Pcs)", quantity: 2, price: 60 },
      { name: "Crispy Medu Vada (2 Pcs)", quantity: 2, price: 70 },
      { name: "Authentic South Indian Filter Coffee", quantity: 2, price: 35 }
    ],
    subtotal: 330,
    deliveryFee: 30,
    taxes: 16.5,
    total: 376.5,
    status: "Delivered",
    paymentMethod: "Card (HDFC Bank)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T09:10:00.000Z",
    formattedTime: "Today, 09:10 AM"
  },
  {
    id: "ORD-9204",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Pranav Patwardhan",
      phone: "+91 97654 33210",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Special Onion Uttappa", quantity: 2, price: 100 },
      { name: "Chilled Masala Buttermilk (Chaas)", quantity: 2, price: 30 }
    ],
    subtotal: 260,
    deliveryFee: 0,
    taxes: 13,
    total: 273,
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T09:40:00.000Z",
    formattedTime: "Today, 09:40 AM"
  },
  {
    id: "ORD-9205",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Ananya Dixit",
      phone: "+91 99224 88771",
      address: "88/B, Bajirao Road, Near City Post, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Special Idli Vada Combo", quantity: 2, price: 75 },
      { name: "Ghee Garlic Roast Dosa", quantity: 1, price: 130 },
      { name: "Authentic South Indian Filter Coffee", quantity: 3, price: 35 }
    ],
    subtotal: 385,
    deliveryFee: 30,
    taxes: 19.25,
    total: 434.25,
    status: "Delivered",
    paymentMethod: "UPI (Paytm)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T10:15:00.000Z",
    formattedTime: "Today, 10:15 AM"
  },
  {
    id: "ORD-9206",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Mandar Bapat",
      phone: "+91 98900 12345",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Traditional Rava Upma", quantity: 2, price: 55 },
      { name: "Ghee Pineapple Shira", quantity: 2, price: 65 }
    ],
    subtotal: 240,
    deliveryFee: 0,
    taxes: 12,
    total: 252,
    status: "Ready",
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T10:50:00.000Z",
    formattedTime: "Today, 10:50 AM"
  },
  {
    id: "ORD-9207",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Gauri Chitale",
      phone: "+91 98221 65432",
      address: "Flat 12, Saraswati Sadan, Perugate, Sadashiv Peth",
      type: "Delivery"
    },
    items: [
      { name: "Ghee Garlic Roast Dosa", quantity: 1, price: 130 },
      { name: "Cheese Mysore Masala Dosa", quantity: 1, price: 150 },
      { name: "Authentic South Indian Filter Coffee", quantity: 2, price: 35 }
    ],
    subtotal: 350,
    deliveryFee: 30,
    taxes: 17.5,
    total: 397.5,
    status: "Preparing",
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T11:20:00.000Z",
    formattedTime: "Today, 11:20 AM"
  },
  {
    id: "ORD-9208",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Siddharth Phadke",
      phone: "+91 97632 99881",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Special Mysore Masala Dosa", quantity: 3, price: 120 },
      { name: "Authentic South Indian Filter Coffee", quantity: 3, price: 35 }
    ],
    subtotal: 465,
    deliveryFee: 0,
    taxes: 23.25,
    total: 488.25,
    status: "Preparing",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    createdAt: "2026-11-19T11:45:00.000Z",
    formattedTime: "Today, 11:45 AM"
  },
  {
    id: "ORD-9209",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Ketaki Ranade",
      phone: "+91 94033 11772",
      address: "House 45, Nagnath Par, Sadashiv Peth, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Steamed Idli Sambar (2 Pcs)", quantity: 1, price: 60 },
      { name: "Ghee Pineapple Shira", quantity: 1, price: 65 }
    ],
    subtotal: 125,
    deliveryFee: 30,
    taxes: 6.25,
    total: 161.25,
    status: "Pending",
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T12:05:00.000Z",
    formattedTime: "Today, 12:05 PM"
  },
  {
    id: "ORD-9210",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Nilesh Gadgil",
      phone: "+91 98500 44332",
      address: "Bhopatkar Road, Sadashiv Peth",
      type: "Delivery"
    },
    items: [
      { name: "Ghee Garlic Roast Dosa", quantity: 2, price: 130 },
      { name: "Tomato Onion Uttappa", quantity: 1, price: 110 }
    ],
    subtotal: 370,
    deliveryFee: 30,
    taxes: 18.5,
    total: 418.5,
    status: "Pending",
    paymentMethod: "Card (ICICI Bank)",
    paymentStatus: "Completed",
    createdAt: "2026-11-19T12:20:00.000Z",
    formattedTime: "Today, 12:20 PM"
  },
  {
    id: "ORD-9211",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Sharada Joshi",
      phone: "+91 98224 55112",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Ghee Paper Plain Dosa", quantity: 1, price: 90 },
      { name: "Traditional Rava Upma", quantity: 1, price: 55 }
    ],
    subtotal: 145,
    deliveryFee: 0,
    taxes: 7.25,
    total: 152.25,
    status: "Delivered",
    paymentMethod: "UPI (Paytm)",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T18:30:00.000Z",
    formattedTime: "Yesterday, 06:30 PM"
  },
  {
    id: "ORD-9212",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Mahesh Agashe",
      phone: "+91 97300 88219",
      address: "Kelkar Road, Narayan Peth, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Special Mysore Masala Dosa", quantity: 2, price: 120 },
      { name: "Crispy Medu Vada (2 Pcs)", quantity: 1, price: 70 },
      { name: "Authentic South Indian Filter Coffee", quantity: 2, price: 35 }
    ],
    subtotal: 380,
    deliveryFee: 30,
    taxes: 19,
    total: 429,
    status: "Delivered",
    paymentMethod: "Card (Axis Bank)",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T19:15:00.000Z",
    formattedTime: "Yesterday, 07:15 PM"
  },
  {
    id: "ORD-9213",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Vaishali Kelkar",
      phone: "+91 98810 99443",
      address: "Appa Balwant Chowk area, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Special Onion Uttappa", quantity: 1, price: 100 },
      { name: "Steamed Idli Sambar (2 Pcs)", quantity: 2, price: 60 }
    ],
    subtotal: 220,
    deliveryFee: 30,
    taxes: 11,
    total: 261,
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T20:00:00.000Z",
    formattedTime: "Yesterday, 08:00 PM"
  },
  {
    id: "ORD-9214",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Omkar Natu",
      phone: "+91 98600 77114",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Cheese Mysore Masala Dosa", quantity: 2, price: 150 },
      { name: "Chilled Masala Buttermilk (Chaas)", quantity: 2, price: 30 }
    ],
    subtotal: 360,
    deliveryFee: 0,
    taxes: 18,
    total: 378,
    status: "Delivered",
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T20:45:00.000Z",
    formattedTime: "Yesterday, 08:45 PM"
  },
  {
    id: "ORD-9215",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Rohit Kanitkar",
      phone: "+91 99231 66554",
      address: "Tilak Road, Near Alka Talkies, Pune",
      type: "Delivery"
    },
    items: [
      { name: "Ghee Garlic Roast Dosa", quantity: 1, price: 130 },
      { name: "Ghee Pineapple Shira", quantity: 2, price: 65 }
    ],
    subtotal: 260,
    deliveryFee: 30,
    taxes: 13,
    total: 303,
    status: "Delivered",
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T21:10:00.000Z",
    formattedTime: "Yesterday, 09:10 PM"
  },
  {
    id: "ORD-9216",
    isSample: true,
    badge: "Sample data",
    customer: {
      name: "Sunita Gokhale",
      phone: "+91 94235 88990",
      address: "Pickup at Restaurant Counter",
      type: "Pickup"
    },
    items: [
      { name: "Steamed Idli Sambar (2 Pcs)", quantity: 3, price: 60 },
      { name: "Crispy Medu Vada (2 Pcs)", quantity: 1, price: 70 }
    ],
    subtotal: 250,
    deliveryFee: 0,
    taxes: 12.5,
    total: 262.5,
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Completed",
    createdAt: "2026-11-18T21:40:00.000Z",
    formattedTime: "Yesterday, 09:40 PM"
  }
];

export const samplePayments = [
  {
    id: "PAY-501",
    orderId: "ORD-9201",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Google Pay)",
    amount: 376.5,
    status: "Success",
    date: "2026-11-19 08:16 AM",
    transactionRef: "UPI/34981290123/HDFC"
  },
  {
    id: "PAY-502",
    orderId: "ORD-9202",
    isSample: true,
    badge: "Sample data",
    method: "UPI (PhonePe)",
    amount: 194.25,
    status: "Success",
    date: "2026-11-19 08:43 AM",
    transactionRef: "UPI/34981440912/YESB"
  },
  {
    id: "PAY-503",
    orderId: "ORD-9203",
    isSample: true,
    badge: "Sample data",
    method: "Credit Card",
    amount: 376.5,
    status: "Success",
    date: "2026-11-19 09:11 AM",
    transactionRef: "CC/HDFC/9921"
  },
  {
    id: "PAY-504",
    orderId: "ORD-9204",
    isSample: true,
    badge: "Sample data",
    method: "Cash on Delivery",
    amount: 273.0,
    status: "Success",
    date: "2026-11-19 09:41 AM",
    transactionRef: "CASH/POS-1"
  },
  {
    id: "PAY-505",
    orderId: "ORD-9205",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Paytm)",
    amount: 434.25,
    status: "Success",
    date: "2026-11-19 10:16 AM",
    transactionRef: "UPI/34981882103/PYTM"
  },
  {
    id: "PAY-506",
    orderId: "ORD-9206",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Google Pay)",
    amount: 252.0,
    status: "Success",
    date: "2026-11-19 10:51 AM",
    transactionRef: "UPI/34982001923/SBI"
  },
  {
    id: "PAY-507",
    orderId: "ORD-9207",
    isSample: true,
    badge: "Sample data",
    method: "UPI (PhonePe)",
    amount: 397.5,
    status: "Success",
    date: "2026-11-19 11:21 AM",
    transactionRef: "UPI/34982210944/ICIC"
  },
  {
    id: "PAY-508",
    orderId: "ORD-9208",
    isSample: true,
    badge: "Sample data",
    method: "Cash on Delivery",
    amount: 488.25,
    status: "Pending",
    date: "2026-11-19 11:46 AM",
    transactionRef: "CASH/AWAITING"
  },
  {
    id: "PAY-509",
    orderId: "ORD-9209",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Google Pay)",
    amount: 161.25,
    status: "Success",
    date: "2026-11-19 12:06 PM",
    transactionRef: "UPI/34982441092/HDFC"
  },
  {
    id: "PAY-510",
    orderId: "ORD-9210",
    isSample: true,
    badge: "Sample data",
    method: "Debit Card",
    amount: 418.5,
    status: "Success",
    date: "2026-11-19 12:21 PM",
    transactionRef: "DC/ICICI/4412"
  },
  {
    id: "PAY-511",
    orderId: "ORD-9211",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Paytm)",
    amount: 152.25,
    status: "Success",
    date: "2026-11-18 06:31 PM",
    transactionRef: "UPI/34978991201/PYTM"
  },
  {
    id: "PAY-512",
    orderId: "ORD-9212",
    isSample: true,
    badge: "Sample data",
    method: "Credit Card",
    amount: 429.0,
    status: "Success",
    date: "2026-11-18 07:16 PM",
    transactionRef: "CC/AXIS/1209"
  },
  {
    id: "PAY-513",
    orderId: "ORD-9213",
    isSample: true,
    badge: "Sample data",
    method: "Cash on Delivery",
    amount: 261.0,
    status: "Success",
    date: "2026-11-18 08:01 PM",
    transactionRef: "CASH/POS-1"
  },
  {
    id: "PAY-514",
    orderId: "ORD-9214",
    isSample: true,
    badge: "Sample data",
    method: "UPI (Google Pay)",
    amount: 378.0,
    status: "Success",
    date: "2026-11-18 08:46 PM",
    transactionRef: "UPI/34979110022/SBI"
  },
  {
    id: "PAY-515",
    orderId: "ORD-9215",
    isSample: true,
    badge: "Sample data",
    method: "UPI (PhonePe)",
    amount: 303.0,
    status: "Success",
    date: "2026-11-18 09:11 PM",
    transactionRef: "UPI/34979220194/YESB"
  },
  {
    id: "PAY-516",
    orderId: "ORD-9216",
    isSample: true,
    badge: "Sample data",
    method: "Cash on Delivery",
    amount: 262.5,
    status: "Success",
    date: "2026-11-18 09:41 PM",
    transactionRef: "CASH/POS-1"
  }
];
