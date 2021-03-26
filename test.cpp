#include<iostream>
using namespace std;

int main(){
  bmi = berat/(tinggi*tinggi);

  cout << "Program menhitung Indeks Masa tubuh" << endl;
  cout << "Masukkan tinggi anda (m)" << endl;
  cin >> tinggi;
  cout << "Masukkan berat anda (kg)" << endl;
  cin >> berat;

  float tinggi, berat, bmi;
  string status_bmi;

  cout << "berat anda" << bmi << endl;
  cout << status_bmi << endl;

  if(bmi < 18.5){
    status_bmi = "Kurus";
  }else if(bmi < 25){
    status_bmi = "Normal";
  }else{
    status_bmi = "Obesitas";
  }

  return 0;
}