# Central Perk Reward System

## Overview
This project is a reward system for a coffee shop named "Central Perk" to enhance customer engagement by rewarding loyal customers with points for their purchases. The system tracks customer purchases and awards points that can be redeemed for free coffee, snacks, or merchandise.

## Architecture and Design Decisions

### Frontend
- **Framework**: React.js
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: MaterialUI
- **Testing**: Cypress
- **Design Considerations**: Mobile-first design ensuring the dashboard is responsive and user-friendly on various devices.

### Integration
- REST APIs are integrated into the front end.
- Used https://fakestoreapi.com/ for data presentation.

## Diagrams

### Data Model Diagram
![Data Model](https://github.com/user-attachments/assets/29baad46-7b85-488c-a454-1d3d3a0752af)

### Use Case Diagram
![Use case diagram](https://github.com/user-attachments/assets/8931f940-16b2-4adf-bf1c-3ae35d89e255)


### Class Diagram
![Class Diagram](https://github.com/user-attachments/assets/f5c56834-7bf6-4de7-9c5d-a0da3de9ce77)


### Sequence Diagrams
#### Sequence Diagram 1
![Sequence Diagram 1](https://github.com/user-attachments/assets/37a56d2d-54b0-44df-a0de-bf46f5d0c5dc)


#### Sequence Diagram 2
![Sequence Diagram 2](https://github.com/user-attachments/assets/f8a85d0c-495c-49db-9414-ba14c12d7749)


## Running the Application

### Prerequisites
- Node.js

### Frontend Setup
1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-repo/central-perk-frontend.git
    cd central-perk-frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm start
    ```

### Testing
To run the Cypress tests, use the following command:
```sh
npm run cypress:open
