import 'package:flutter/material.dart';
import 'package:flutter_phosphor_icons/flutter_phosphor_icons.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Phosphor Icons Example'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(
                    PhosphorIcons.heart,
                    size: 45,
                  ),
                  Icon(
                    PhosphorIcons.heart_thin,
                    size: 45,
                  ),
                  Icon(
                    PhosphorIcons.heart_light,
                    size: 45,
                  ),
                  Icon(
                    PhosphorIcons.heart_bold,
                    size: 45,
                  ),
                  Icon(
                    PhosphorIcons.heart_fill,
                    size: 45,
                  ),
                ],
              ),
            ),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text(
                    "Regular",
                  ),
                  Text(
                    "Thin",
                  ),
                  Text(
                    "Light",
                  ),
                  Text(
                    "Fill",
                  ),
                  Text(
                    "Bold",
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
