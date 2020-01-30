<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!

Connection connection;
Statement statement;
ResultSet resultSet;

String driver = "oracle.jdbc.driver.OracleDriver";
String url = "jdbc:oracle:thin:@localhost:1521:xe";
String uid = "star";
String upw = "1234";
String query = "select * from member";

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
try{
	
	Class.forName(driver);
	connection = DriverManager.getConnection(url,uid,upw);
	statement = connection.createStatement();
	resultSet = statement.executeQuery(query);
	
	while(resultSet.next()){
		String id = resultSet.getString("id");
		String pw = resultSet.getString("pw");
		String name = resultSet.getString("name");
		String phone = resultSet.getString("phone");
		out.println("id:"+id+"<br>");
		out.println("pw:"+pw+"<br>");
		out.println("name:"+name+"<br>");
		out.println("phone:"+phone+"<br>");
		out.println("-------------------------<br>");
	}
	
	
}catch(Exception e){
	
}finally {
	
	try{
		if(resultSet!=null) resultSet.close();
		if(statement!=null) statement.close();
		if(connection!=null) connection.close();
	}catch(Exception e) {
		
	}
}
%>

</body>
</html>