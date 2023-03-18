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

public class ClienteActivity extends AppCompatActivity {

    EditText jetidentificacion,jetnombre,jetcorreo;
    CheckBox jcbactivo;
    String identificacion,nombre,correo;
    ClsOpenHelper admin=new ClsOpenHelper(this,"Concesionario.db",null,1);
    long respuesta;
    byte sw;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cliente);
        //Ocultar la barra de titulo por defecto y voy a asociar
        //objetos Java con Objetos Xml
        getSupportActionBar().hide();
        jetidentificacion=findViewById(R.id.etidentificacion);
        jetnombre=findViewById(R.id.etnombre);
        jetcorreo=findViewById(R.id.etcorreo);
        jcbactivo=findViewById(R.id.cbactivo);
        sw=0;
    }

    public void Guardar(View view){
        identificacion=jetidentificacion.getText().toString();
        nombre=jetnombre.getText().toString();
        correo=jetcorreo.getText().toString();
        if (identificacion.isEmpty() || nombre.isEmpty() || correo.isEmpty()){
            Toast.makeText(this, "Todos los datos son requeridos", Toast.LENGTH_SHORT).show();
            jetidentificacion.requestFocus();
        }else{
            SQLiteDatabase db=admin.getWritableDatabase();
            ContentValues registro=new ContentValues();
            registro.put("identificacion",identificacion);
            registro.put("nombre",nombre);
            registro.put("correo",correo);
            if (sw==0)
                respuesta=db.insert("TblCliente",null,registro);
            else{
                respuesta=db.update("TblCliente",registro,"identificacion='"+identificacion+"'",null);
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
        identificacion=jetidentificacion.getText().toString();
        if (!identificacion.isEmpty()){
            SQLiteDatabase db=admin.getReadableDatabase();
            Cursor fila=db.rawQuery("select * from TblCliente where identificacion='"+identificacion+"'",null);
            if (fila.moveToNext()){
                sw=1;
                jetnombre.setText(fila.getString(1));
                jetcorreo.setText(fila.getString(2));
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

    public void Anular (View view){
        if (sw ==1){
            sw=0;
            SQLiteDatabase db=admin.getWritableDatabase();
            ContentValues registro=new ContentValues();
            registro.put("activo","No");
            respuesta=db.update("TblCliente", registro, "identificacion='"+identificacion+"'", null);
            if (respuesta > 0 ){
                Toast.makeText(this, "Registro Anulado", Toast.LENGTH_SHORT).show();
                limpiar_campos();
            }else {
                Toast.makeText(this, "Error Anulando Registro", Toast.LENGTH_SHORT).show();
            }

            db.close();
        }else {
            Toast.makeText(this, "Primero debe Consultar", Toast.LENGTH_SHORT).show();
            jetidentificacion.requestFocus();
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
        jetidentificacion.setText("");
        jetnombre.setText("");
        jetcorreo.setText("");
        jcbactivo.setChecked(false);
        jetidentificacion.requestFocus();
        sw=0;
    }

}