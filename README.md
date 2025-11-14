# FXBG Nonprofit Network Intelligence Platform

## Overview
An interactive Maltego-like visualization system for analyzing Fredericksburg, Virginia's nonprofit sector. This platform provides real-time network mapping, organizational intelligence, and social network analysis of 13 major nonprofit organizations and 8 key community leaders.

## Features

### 🎯 Core Capabilities

#### 1. **Interactive Network Visualization**
- Force-directed graph layout showing organizational relationships
- Dynamic node sizing based on organizational budget
- Color-coded status indicators (Stable, Moderate Risk, High Risk, Defunct)
- Smooth physics simulation for organic network representation

#### 2. **Multi-View Modes**
- **Network Map**: Organization-centric view showing inter-organizational connections
- **Key People**: Adds influential individuals and their board connections
- **Connections**: Focuses on relationship mapping across the ecosystem

#### 3. **Advanced Filtering**
- **Sector Filter**: Healthcare, Housing, Food Security, Legal Services, Environment, Animal Welfare, Veterans, Philanthropy
- **Status Filter**: Stable, Moderate Risk, High Risk, Defunct
- Real-time visual updates based on filter selections

#### 4. **Organization Intelligence Panels**
Each organization node reveals comprehensive information:
- **Status & Type**: Current operational status and sector classification
- **Mission Statement**: Core organizational purpose
- **Financial Overview**: Budget, expenses, net assets, staffing
- **Leadership & Board**: Complete directory of key personnel with role descriptions
- **Key Projects**: Major initiatives, programs, and service areas
- **Risk Assessment**: Financial vulnerabilities, operational challenges, sustainability factors
- **Recent News**: Current developments and significant events
- **Network Connections**: Interactive links to connected organizations

#### 5. **People Network Analysis**
- Identify multi-board members and key connectors
- Visualize influence patterns across sectors
- Track individual impact across the nonprofit ecosystem
- Detailed person profiles showing:
  - Board positions held
  - Affiliated organizations
  - Professional background
  - Network influence metrics

#### 6. **Connection Analyzer Tool**
- Real-time person search functionality
- Displays all organizational affiliations
- Shows cross-sector connections
- Identifies potential conflicts of interest or beneficial collaborations

#### 7. **Interactive Controls**
- **Pan**: Click and drag background to navigate
- **Zoom**: Mouse wheel to zoom in/out (0.5x - 3x)
- **Drag Nodes**: Click and drag any node to reposition
- **Reset View**: Return to default layout and zoom
- **Toggle Labels**: Show/hide organization names
- **Export Data**: Download complete network data as JSON

### 📊 Statistics Dashboard
Real-time metrics including:
- Total organizations and active count
- Budget aggregations (~$100M+ total)
- Sector distribution
- Most connected individuals
- Network density metrics

### 🎨 Visual Design
- **Tactical Intelligence Theme**: Dark background with cyan accents
- **Grid Overlay**: Military-style tactical grid background
- **Scanline Effect**: Animated scanning line for dynamic feel
- **Corner Brackets**: HUD-style interface framing
- **Glow Effects**: Selected and hovered nodes highlight with glow
- **Status Color Coding**:
  - 🟢 Green (#00ff88): Stable organizations
  - 🟡 Yellow (#ffaa00): Moderate risk
  - 🔴 Red (#ff4444): High risk
  - ⚫ Gray (#666666): Defunct

### 📱 Responsive Design
- **Desktop**: Full feature set with multi-panel layout
- **Mobile**: Touch-optimized controls, collapsible panels
- **Landscape/Portrait**: Adaptive layout for all orientations

## Data Structure

### Organizations (13 Total)
1. **Lloyd F. Moss Free Clinic** (Defunct) - Healthcare
2. **Gwyneth's Gift Foundation** (Stable) - Healthcare/Emergency Preparedness
3. **Rappahannock United Way** (Stable) - Philanthropy Coordination
4. **Central Rappahannock Habitat for Humanity** (Stable) - Housing
5. **Fredericksburg Regional Food Bank** (Moderate) - Food Security
6. **Legal Aid Works** (Moderate) - Legal Services
7. **Friends of the Rappahannock** (Stable) - Environment
8. **Fredericksburg SPCA** (Stable) - Animal Welfare
9. **Leashes of Valor** (Moderate) - Veterans Services
10. **Micah Ecumenical Ministries** (Stable) - Homeless Services
11. **Community Foundation of the Rappahannock River Region** (Moderate) - Philanthropy
12. **Empowerhouse** (Stable) - Domestic Violence Services
13. **Hub of Hope** (Moderate) - Food Security/Meal Delivery

### Key People (8 Network Connectors)
1. **Molly Flurry** - 4 boards (SPCA, Habitat, FOR, Food Bank)
2. **Sarah Walsh** - 3 boards (RUW, SPCA, Food Bank)
3. **Joel Griffin** - 2 boards (Gwyneth's Gift, Legal Aid Works)
4. **Fred Rankin** - 3 connections (Micah, MWHC, FOR)
5. **George Barnick** - 2 boards (SPCA, Food Bank)
6. **Regis Keddie** - 2 boards (Micah, FOR)
7. **Samuel Lee Hayes III** - 2 boards (Leashes of Valor, Hub of Hope)
8. **Richard Falkenstein** - 3 boards (Leashes of Valor, Hub of Hope, SPCA)

## Technical Implementation

### Technologies
- **Pure JavaScript**: No dependencies, vanilla ES6+
- **HTML5 Canvas**: Hardware-accelerated rendering
- **CSS3**: Advanced gradients, animations, and responsive design
- **Physics Simulation**: Custom force-directed graph algorithm

### Performance Optimizations
- Efficient collision detection using spatial hashing
- Debounced rendering for smooth 60fps animation
- Lazy loading of panel content
- Optimized canvas clearing and redrawing

### Physics Model
- **Repulsion Force**: Prevents node overlap
- **Attraction Force**: Maintains link integrity
- **Center Gravity**: Keeps network centered
- **Damping**: Prevents oscillation
- **Boundary Constraints**: Nodes stay within viewport

## Usage Instructions

### Basic Navigation
1. **View Organizations**: Nodes automatically display on load
2. **Select Organization**: Click any node to open detailed info panel
3. **Explore Connections**: Click connection links in info panel to navigate
4. **Pan View**: Click and drag on empty canvas area
5. **Zoom**: Use mouse wheel to zoom in/out
6. **Reposition Nodes**: Drag nodes to custom positions

### Advanced Features
1. **Filter by Sector**: Use sector dropdown to focus on specific types
2. **Filter by Risk**: View only organizations with specific risk levels
3. **People View**: Switch to "Key People" mode to see influential connectors
4. **Connection Analysis**: Use analyzer tool to search for specific individuals
5. **Export Data**: Click export button to download complete network data

### Tips & Tricks
- **Double-click empty space**: Quick reset to center view
- **Shift+Drag**: Pan without triggering node selection
- **Hover nodes**: See quick preview labels
- **Right panel statistics**: Monitor filtered organization counts
- **Legend**: Reference color coding and node types

## Key Insights from Data

### Most Critical Organizations (By Impact)
1. **Fredericksburg Regional Food Bank**: 4M meals, $21.7M budget, serves as regional hub
2. **Micah Ecumenical Ministries**: 260+ housed, 97% success rate, comprehensive services
3. **Community Foundation**: $60M assets, enables all other organizations
4. **Empowerhouse**: 3,000+ DV survivors served, critical safety net

### Most At-Risk Organizations
1. **Lloyd F. Moss Free Clinic**: CLOSED June 2025 - cautionary tale
2. **Hub of Hope**: New org (~2020), founder-dependent, small budget
3. **Leashes of Valor**: High-cost model, grant-dependent
4. **Community Foundation**: Leadership transition since 2021

### Network Super-Connectors
- **Molly Flurry**: Only person on 4 boards, bridges 4 different sectors
- **Sarah Walsh**: Professional nonprofit leader connecting RUW to direct services
- **Richard Falkenstein**: Business leader bridging veteran and animal welfare sectors

### Interesting Patterns
- **Food Security Network**: Hub of Hope, Food Bank, and Micah form tight cluster
- **Animal-Human Services Bridge**: SPCA connects to Empowerhouse (DV pets program)
- **Healthcare Void**: Moss Clinic closure leaves gap, MWHC connection critical
- **Faith-Based Backbone**: Many organizations have church board members (Micah, Habitat)

## Data Sources
- **Primary Source**: nonprofits.pdf - "Significance of Fredericksburg's Non-Profit Sector"
- **Structured Data**: nonprofits.json with validated organizational records
- **Data Date**: 2025 (current)
- **Coverage**: Fredericksburg, VA and Planning District 16

## Future Enhancements
- [ ] Timeline view showing organizational evolution
- [ ] Financial trend analysis with historical budget data
- [ ] Heat maps showing geographic service coverage
- [ ] Collaboration opportunity recommender
- [ ] Board diversity analytics
- [ ] Funding dependency visualization
- [ ] Impact metrics dashboard
- [ ] Real-time news integration

## Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari iOS 14+
- ✅ Chrome Mobile 90+

## License
This platform is designed for community use in analyzing and supporting the Fredericksburg nonprofit sector.

## Credits
**Data Analysis**: Based on comprehensive research of Fredericksburg nonprofit sector
**Design**: Inspired by FXBG Intel Platform tactical interface
**Development**: Custom interactive network visualization system

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Platform**: FXBG Nonprofit Network Intelligence
