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

public class VentaActivity extends AppCompatActivity {

    EditText jetfecha, jetcodigo, jetidentificacion,jetnombre,jetplaca, jetmodelo, jetmarca;
    CheckBox jcbactivo;
    String fecha, codigo, identificacion, nombre, placa, modelo, marca;
    long respuesta;
    byte sw;
    ClsOpenHelper admin=new ClsOpenHelper(this,"Concesionario.db",null,1);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_venta);

        //Ocultar la barra de titulo por defecto y voy a asociar
        //objetos Java con Objetos Xml
        getSupportActionBar().hide();
        jetfecha=findViewById(R.id.etfecha);
        jetcodigo=findViewById(R.id.etcodigo);
        jetidentificacion=findViewById(R.id.etidentificacion);
        jetnombre=findViewById(R.id.etnombre);
        jetplaca=findViewById(R.id.etplaca);
        jetmodelo=findViewById(R.id.etmodelo);
        jetmarca=findViewById(R.id.etmarca);
        jcbactivo=findViewById(R.id.cbactivo);
        sw = 0;
    }

    public void Guardar(View view){
        fecha=jetfecha.getText().toString();
        codigo=jetcodigo.getText().toString();
        identificacion=jetidentificacion.getText().toString();
        placa=jetplaca.getText().toString();

        if (fecha.isEmpty() || codigo.isEmpty() || identificacion.isEmpty() || placa.isEmpty()){
            Toast.makeText(this, "Todos los datos son requeridos", Toast.LENGTH_SHORT).show();
            jetcodigo.requestFocus();
        }else{
            SQLiteDatabase db=admin.getWritableDatabase();
            ContentValues registro=new ContentValues();
            registro.put("fecha",fecha);
            registro.put("codigo",codigo);
            registro.put("identificacion",identificacion);
            registro.put("placa",placa);

            if (sw==0)
                respuesta=db.insert("TblVenta",null,registro);
            else{
                respuesta=db.update("TblVenta",registro,"identificacion='"+identificacion+"'",null);
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
        //Validando que haya una Venta
        codigo=jetcodigo.getText().toString();
        if (!codigo.isEmpty()){
            SQLiteDatabase db=admin.getReadableDatabase();
            Cursor fila=db.rawQuery("select * from TblVenta where codigo='"+codigo+"'",null);
            if (fila.moveToNext()){
                sw=1;
                jetfecha.setText(fila.getString(1));
                jetidentificacion.setText(fila.getString(2));
                jetplaca.setText(fila.getString(3));
                jetnombre.setText(fila.getString(2));
                ConsultarCliente(jetidentificacion);
                ConsultarPlaca(jetplaca);
                if (fila.getString(4).equals("Si"))
                    jcbactivo.setChecked(true);
                else
                    jcbactivo.setChecked(false);
            }else{
                Toast.makeText(this, "Registro no hallado", Toast.LENGTH_SHORT).show();
            }

            db.close();
        }else{
            Toast.makeText(this, "La Placa es requerida para consultar", Toast.LENGTH_SHORT).show();
            jetcodigo.requestFocus();
        }
    }  //FIN METODO CONSULTAR



    private void limpiar_campos() {
        jetfecha.setText("");
        jetcodigo.setText("");
        jetidentificacion.setText("");
        jetnombre.setText("");
        jetplaca.setText("");
        jetmodelo.setText("");
        jetmarca.setText("");
        jcbactivo.setChecked(false);
    }


    public void ConsultarCliente(View view){
        //Validando que haya una identificacion
        identificacion=jetidentificacion.getText().toString();
        if (!identificacion.isEmpty()){
            SQLiteDatabase db=admin.getReadableDatabase();
            Cursor fila=db.rawQuery("select * from TblCliente where identificacion='"+identificacion+"'",null);
            if (fila.moveToNext()){
                jetnombre.setText(fila.getString(1));

                if (fila.getString(3).equals("Si"))
                    jcbactivo.setChecked(true);
                else
                    jcbactivo.setChecked(false);
            }else{
                Toast.makeText(this, "Registro no hallado", Toast.LENGTH_SHORT).show();
            }
            db.close();
        }else{
            Toast.makeText(this, "Identificacion es requerida para consultar", Toast.LENGTH_SHORT).show();
            jetidentificacion.requestFocus();
        }
    }

    public void ConsultarPlaca(View view){
        //Validando que haya una identificacion
        placa=jetplaca.getText().toString();
        if (!placa.isEmpty()){
            SQLiteDatabase db=admin.getReadableDatabase();
            Cursor fila=db.rawQuery("select * from TblVehiculo where placa='"+placa+"'",null);
            if (fila.moveToNext()){
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


    public void Regresar(View view){
        Intent intmain=new Intent(this,MainActivity.class);
        startActivity(intmain);
    }

    public void limpiar_campos(View view) {
        jetfecha.setText("");
        jetcodigo.setText("");
        jetidentificacion.setText("");
        jetnombre.setText("");
        jetplaca.setText("");
        jetmodelo.setText("");
        jetmarca.setText("");
        jcbactivo.setChecked(false);
    }


}



