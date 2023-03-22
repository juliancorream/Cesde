package com.example.concesionario_sabado;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class VehiculoActivity extends AppCompatActivity {

    EditText jetplaca, jetmodelo, jetmarca;
    CheckBox jcbactivo;
    String placa, modelo, marca;
    ClsOpenHelper admin=new ClsOpenHelper(this,"Concesionario.db",null,1);
    long respuesta;
    byte sw;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vehiculo);

        //Ocultar la barra de titulo por defecto y voy a asociar
        //objetos Java con Objetos Xml
        getSupportActionBar().hide();
        jetplaca=findViewById(R.id.etplaca);
        jetmodelo=findViewById(R.id.etmodelo);
        jetmarca=findViewById(R.id.etmarca);
        jcbactivo=findViewById(R.id.cbactivo);
    }

    public void Guardar(View view){
        placa=jetplaca.getText().toString();
        modelo=jetmodelo.getText().toString();
        marca=jetmarca.getText().toString();
        if (placa.isEmpty() || modelo.isEmpty() || marca.isEmpty()){
            Toast.makeText(this, "Todos los datos son requeridos", Toast.LENGTH_SHORT).show();
            jetplaca.requestFocus();
        }else{
            SQLiteDatabase db=admin.getWritableDatabase();
            ContentValues registro=new ContentValues();
            registro.put("placa",placa);
            registro.put("modelo",modelo);
            registro.put("marca",marca);
            if (sw==0)
                respuesta=db.insert("TblVehiculo",null,registro);
            else{
                respuesta=db.update("TblVehiculo",registro,"placa='"+placa+"'",null);
                sw=0;
            }

            if (respuesta == 0){
                Toast.makeText(this, "Error Guardando registro", Toast.LENGTH_SHORT).show();
            }else{
                Toast.makeText(this, "Registro Guardado", Toast.LENGTH_SHORT).show();
                limpiar_campos();
            }
            db.close();
        }
    }//fin Metodo de guardar


    public void Consultar(View view){
        //Validando que haya una identificacion
        placa=jetplaca.getText().toString();
        if (!placa.isEmpty()){
            SQLiteDatabase db=admin.getReadableDatabase();
            Cursor fila=db.rawQuery("select * from TblVehiculo where placa='"+placa+"'",null);
            if (fila.moveToNext()){
                sw=1;
                jetmodelo.setText(fila.getString(1));
                jetmarca.setText(fila.getString(2));
                if (fila.getString(3).equals("Si"))
                    jcbactivo.setChecked(true);
                else
                    jcbactivo.setChecked(false);
            }else{
                Toast.makeText(this, "Registro no hallado", Toast.LENGTH_SHORT).show();
            }
            db.close();
        }else{
            Toast.makeText(this, "La Placa es requerida para consultar", Toast.LENGTH_SHORT).show();
            jetplaca.requestFocus();
        }
    }  //FIN METODO CONSULTAR


    public void Anular (View view){
        if (sw ==1){
            sw=0;
            SQLiteDatabase db=admin.getWritableDatabase();
            ContentValues registro=new ContentValues();
            registro.put("activo","No");
            respuesta=db.update("TblVehiculo", registro, "placa='"+placa+"'", null);
            if (respuesta > 0 ){
                Toast.makeText(this, "Registro Anulado", Toast.LENGTH_SHORT).show();
                limpiar_campos();
            }else {
                Toast.makeText(this, "Error Anulando Registro", Toast.LENGTH_SHORT).show();
            }
            db.close();
        }else {
            Toast.makeText(this, "Primero debe Consultar", Toast.LENGTH_SHORT).show();
            jetplaca.requestFocus();
        }
    }//Fin Anular

    public void Cancelar(View view){
        limpiar_campos();
    }

    public void Regresar(View view){
        Intent intmain=new Intent(this,MainActivity.class);
        startActivity(intmain);
    }

    private void limpiar_campos(){
        jetplaca.setText("");
        jetmodelo.setText("");
        jetmarca.setText("");
        jcbactivo.setChecked(false);
        jetplaca.requestFocus();
        sw=0;
    }

}