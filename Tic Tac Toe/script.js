.ui {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;

}

#main {
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
}

.cell {
  border: none;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  text-align: center;
  cursor: pointer;
  background-color: #212121;
}

.cell:active {
  outline: none;
}

#b1 {
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}
#b2 {
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
}
#b3 {
  border-bottom: 1px solid white;
  border-left: 1px solid white;
}
#b4 {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}
#b5 {
  border: 1px solid white;
}
#b6 {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
}
#b7 {
  border-top: 1px solid white;
  border-right: 1px solid white;
}
#b8 {
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
}
#b9 {
  border-top: 1px solid white;
  border-left: 1px solid white;
}

#btn {
  box-sizing: border-box;
  width: 95px;
  height: 40px;
  border: 1px solid white;
  margin-top: 50px;
  border-radius: 8px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: whitesmoke;
  color: black;
  font-size: 20px;
  cursor: pointer;
}

#print {
    margin-top: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  font-size: 20px;
}
