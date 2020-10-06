#include <iostream>

using namespace std;

int main(){
    int n;
        bool hiba = false;
        do{
        cout << "Adjon meg egy pozitív egész számot ";
        cin >> n;
        hiba = cin.fail();
        if(hiba) cin.clear();
        string tmp = "";
        getline(cin,tmp);
        hiba = hiba || tmp.size()!=0 || n<0;
        if(hiba) cout << "Hibás adat!" << endl;
    }while(hiba);
}

