var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.JointSpring' )
  var i1369 = data
  i1368.spring = i1369[0]
  i1368.damper = i1369[1]
  i1368.targetPosition = i1369[2]
  return i1368
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.JointMotor' )
  var i1371 = data
  i1370.m_TargetVelocity = i1371[0]
  i1370.m_Force = i1371[1]
  i1370.m_FreeSpin = i1371[2]
  return i1370
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.JointLimits' )
  var i1373 = data
  i1372.m_Min = i1373[0]
  i1372.m_Max = i1373[1]
  i1372.m_Bounciness = i1373[2]
  i1372.m_BounceMinVelocity = i1373[3]
  i1372.m_ContactDistance = i1373[4]
  i1372.minBounce = i1373[5]
  i1372.maxBounce = i1373[6]
  return i1372
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.JointDrive' )
  var i1375 = data
  i1374.m_PositionSpring = i1375[0]
  i1374.m_PositionDamper = i1375[1]
  i1374.m_MaximumForce = i1375[2]
  return i1374
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1377 = data
  i1376.m_Spring = i1377[0]
  i1376.m_Damper = i1377[1]
  return i1376
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1379 = data
  i1378.m_Limit = i1379[0]
  i1378.m_Bounciness = i1379[1]
  i1378.m_ContactDistance = i1379[2]
  return i1378
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1381 = data
  i1380.m_ExtremumSlip = i1381[0]
  i1380.m_ExtremumValue = i1381[1]
  i1380.m_AsymptoteSlip = i1381[2]
  i1380.m_AsymptoteValue = i1381[3]
  i1380.m_Stiffness = i1381[4]
  return i1380
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1383 = data
  i1382.m_LowerAngle = i1383[0]
  i1382.m_UpperAngle = i1383[1]
  return i1382
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1385 = data
  i1384.m_MotorSpeed = i1385[0]
  i1384.m_MaximumMotorTorque = i1385[1]
  return i1384
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1387 = data
  i1386.m_DampingRatio = i1387[0]
  i1386.m_Frequency = i1387[1]
  i1386.m_Angle = i1387[2]
  return i1386
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1389 = data
  i1388.m_LowerTranslation = i1389[0]
  i1388.m_UpperTranslation = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1390 = root || new pc.UnityMaterial()
  var i1391 = data
  i1390.name = i1391[0]
  request.r(i1391[1], i1391[2], 0, i1390, 'shader')
  i1390.renderQueue = i1391[3]
  i1390.enableInstancing = !!i1391[4]
  var i1393 = i1391[5]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1393[i + 0]) );
  }
  i1390.floatParameters = i1392
  var i1395 = i1391[6]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1395[i + 0]) );
  }
  i1390.colorParameters = i1394
  var i1397 = i1391[7]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1397[i + 0]) );
  }
  i1390.vectorParameters = i1396
  var i1399 = i1391[8]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1399[i + 0]) );
  }
  i1390.textureParameters = i1398
  var i1401 = i1391[9]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1401[i + 0]) );
  }
  i1390.materialFlags = i1400
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1405 = data
  i1404.name = i1405[0]
  i1404.value = i1405[1]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1409 = data
  i1408.name = i1409[0]
  i1408.value = new pc.Color(i1409[1], i1409[2], i1409[3], i1409[4])
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1413 = data
  i1412.name = i1413[0]
  i1412.value = new pc.Vec4( i1413[1], i1413[2], i1413[3], i1413[4] )
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1417 = data
  i1416.name = i1417[0]
  request.r(i1417[1], i1417[2], 0, i1416, 'value')
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.enabled = !!i1421[1]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.halfPrecision = !!i1423[1]
  i1422.vertexCount = i1423[2]
  i1422.aabb = i1423[3]
  var i1425 = i1423[4]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( !!i1425[i + 0] );
  }
  i1422.streams = i1424
  i1422.vertices = i1423[5]
  var i1427 = i1423[6]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1427[i + 0]) );
  }
  i1422.subMeshes = i1426
  var i1429 = i1423[7]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 16) {
    i1428.push( new pc.Mat4().setData(i1429[i + 0], i1429[i + 1], i1429[i + 2], i1429[i + 3],  i1429[i + 4], i1429[i + 5], i1429[i + 6], i1429[i + 7],  i1429[i + 8], i1429[i + 9], i1429[i + 10], i1429[i + 11],  i1429[i + 12], i1429[i + 13], i1429[i + 14], i1429[i + 15]) );
  }
  i1422.bindposes = i1428
  var i1431 = i1423[8]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1431[i + 0]) );
  }
  i1422.blendShapes = i1430
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1437 = data
  i1436.triangles = i1437[0]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1443 = data
  i1442.name = i1443[0]
  var i1445 = i1443[1]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1445[i + 0]) );
  }
  i1442.frames = i1444
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.width = i1447[1]
  i1446.height = i1447[2]
  i1446.mipmapCount = i1447[3]
  i1446.anisoLevel = i1447[4]
  i1446.filterMode = i1447[5]
  i1446.hdr = !!i1447[6]
  i1446.format = i1447[7]
  i1446.wrapMode = i1447[8]
  i1446.alphaIsTransparency = !!i1447[9]
  i1446.alphaSource = i1447[10]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1449 = data
  i1448.position = new pc.Vec3( i1449[0], i1449[1], i1449[2] )
  i1448.scale = new pc.Vec3( i1449[3], i1449[4], i1449[5] )
  i1448.rotation = new pc.Quat(i1449[6], i1449[7], i1449[8], i1449[9])
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1451 = data
  i1450.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1451[0], i1450.main)
  i1450.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1451[1], i1450.colorBySpeed)
  i1450.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1451[2], i1450.colorOverLifetime)
  i1450.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1451[3], i1450.emission)
  i1450.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1451[4], i1450.rotationBySpeed)
  i1450.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1451[5], i1450.rotationOverLifetime)
  i1450.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1451[6], i1450.shape)
  i1450.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1451[7], i1450.sizeBySpeed)
  i1450.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1451[8], i1450.sizeOverLifetime)
  i1450.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1451[9], i1450.textureSheetAnimation)
  i1450.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1451[10], i1450.velocityOverLifetime)
  i1450.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1451[11], i1450.noise)
  i1450.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1451[12], i1450.inheritVelocity)
  i1450.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1451[13], i1450.forceOverLifetime)
  i1450.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1451[14], i1450.limitVelocityOverLifetime)
  i1450.useAutoRandomSeed = !!i1451[15]
  i1450.randomSeed = i1451[16]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemMain()
  var i1453 = data
  i1452.duration = i1453[0]
  i1452.loop = !!i1453[1]
  i1452.prewarm = !!i1453[2]
  i1452.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[3], i1452.startDelay)
  i1452.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[4], i1452.startLifetime)
  i1452.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[5], i1452.startSpeed)
  i1452.startSize3D = !!i1453[6]
  i1452.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[7], i1452.startSizeX)
  i1452.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[8], i1452.startSizeY)
  i1452.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[9], i1452.startSizeZ)
  i1452.startRotation3D = !!i1453[10]
  i1452.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[11], i1452.startRotationX)
  i1452.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[12], i1452.startRotationY)
  i1452.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[13], i1452.startRotationZ)
  i1452.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1453[14], i1452.startColor)
  i1452.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[15], i1452.gravityModifier)
  i1452.simulationSpace = i1453[16]
  request.r(i1453[17], i1453[18], 0, i1452, 'customSimulationSpace')
  i1452.simulationSpeed = i1453[19]
  i1452.useUnscaledTime = !!i1453[20]
  i1452.scalingMode = i1453[21]
  i1452.playOnAwake = !!i1453[22]
  i1452.maxParticles = i1453[23]
  i1452.emitterVelocityMode = i1453[24]
  i1452.stopAction = i1453[25]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1454 = root || new pc.MinMaxCurve()
  var i1455 = data
  i1454.mode = i1455[0]
  i1454.curveMin = new pc.AnimationCurve( { keys_flow: i1455[1] } )
  i1454.curveMax = new pc.AnimationCurve( { keys_flow: i1455[2] } )
  i1454.curveMultiplier = i1455[3]
  i1454.constantMin = i1455[4]
  i1454.constantMax = i1455[5]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1456 = root || new pc.MinMaxGradient()
  var i1457 = data
  i1456.mode = i1457[0]
  i1456.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1457[1], i1456.gradientMin)
  i1456.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1457[2], i1456.gradientMax)
  i1456.colorMin = new pc.Color(i1457[3], i1457[4], i1457[5], i1457[6])
  i1456.colorMax = new pc.Color(i1457[7], i1457[8], i1457[9], i1457[10])
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1459 = data
  i1458.mode = i1459[0]
  var i1461 = i1459[1]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1461[i + 0]) );
  }
  i1458.colorKeys = i1460
  var i1463 = i1459[2]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1463[i + 0]) );
  }
  i1458.alphaKeys = i1462
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1464 = root || new pc.ParticleSystemColorBySpeed()
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1465[1], i1464.color)
  i1464.range = new pc.Vec2( i1465[2], i1465[3] )
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1469 = data
  i1468.color = new pc.Color(i1469[0], i1469[1], i1469[2], i1469[3])
  i1468.time = i1469[4]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1473 = data
  i1472.alpha = i1473[0]
  i1472.time = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1474 = root || new pc.ParticleSystemColorOverLifetime()
  var i1475 = data
  i1474.enabled = !!i1475[0]
  i1474.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1475[1], i1474.color)
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1476 = root || new pc.ParticleSystemEmitter()
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[1], i1476.rateOverTime)
  i1476.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[2], i1476.rateOverDistance)
  var i1479 = i1477[3]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1479[i + 0]) );
  }
  i1476.bursts = i1478
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1482 = root || new pc.ParticleSystemBurst()
  var i1483 = data
  i1482.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1483[0], i1482.count)
  i1482.cycleCount = i1483[1]
  i1482.minCount = i1483[2]
  i1482.maxCount = i1483[3]
  i1482.repeatInterval = i1483[4]
  i1482.time = i1483[5]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1484 = root || new pc.ParticleSystemRotationBySpeed()
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[1], i1484.x)
  i1484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[2], i1484.y)
  i1484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[3], i1484.z)
  i1484.separateAxes = !!i1485[4]
  i1484.range = new pc.Vec2( i1485[5], i1485[6] )
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1486 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[1], i1486.x)
  i1486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[2], i1486.y)
  i1486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[3], i1486.z)
  i1486.separateAxes = !!i1487[4]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1488 = root || new pc.ParticleSystemShape()
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.shapeType = i1489[1]
  i1488.randomDirectionAmount = i1489[2]
  i1488.sphericalDirectionAmount = i1489[3]
  i1488.randomPositionAmount = i1489[4]
  i1488.alignToDirection = !!i1489[5]
  i1488.radius = i1489[6]
  i1488.radiusMode = i1489[7]
  i1488.radiusSpread = i1489[8]
  i1488.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[9], i1488.radiusSpeed)
  i1488.radiusThickness = i1489[10]
  i1488.angle = i1489[11]
  i1488.length = i1489[12]
  i1488.boxThickness = new pc.Vec3( i1489[13], i1489[14], i1489[15] )
  i1488.meshShapeType = i1489[16]
  request.r(i1489[17], i1489[18], 0, i1488, 'mesh')
  request.r(i1489[19], i1489[20], 0, i1488, 'meshRenderer')
  request.r(i1489[21], i1489[22], 0, i1488, 'skinnedMeshRenderer')
  i1488.useMeshMaterialIndex = !!i1489[23]
  i1488.meshMaterialIndex = i1489[24]
  i1488.useMeshColors = !!i1489[25]
  i1488.normalOffset = i1489[26]
  i1488.arc = i1489[27]
  i1488.arcMode = i1489[28]
  i1488.arcSpread = i1489[29]
  i1488.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[30], i1488.arcSpeed)
  i1488.donutRadius = i1489[31]
  i1488.position = new pc.Vec3( i1489[32], i1489[33], i1489[34] )
  i1488.rotation = new pc.Vec3( i1489[35], i1489[36], i1489[37] )
  i1488.scale = new pc.Vec3( i1489[38], i1489[39], i1489[40] )
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1490 = root || new pc.ParticleSystemSizeBySpeed()
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[1], i1490.x)
  i1490.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[2], i1490.y)
  i1490.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[3], i1490.z)
  i1490.separateAxes = !!i1491[4]
  i1490.range = new pc.Vec2( i1491[5], i1491[6] )
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1492 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1493 = data
  i1492.enabled = !!i1493[0]
  i1492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[1], i1492.x)
  i1492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[2], i1492.y)
  i1492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[3], i1492.z)
  i1492.separateAxes = !!i1493[4]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1494 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1495 = data
  i1494.enabled = !!i1495[0]
  i1494.mode = i1495[1]
  i1494.animation = i1495[2]
  i1494.numTilesX = i1495[3]
  i1494.numTilesY = i1495[4]
  i1494.useRandomRow = !!i1495[5]
  i1494.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1495[6], i1494.frameOverTime)
  i1494.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1495[7], i1494.startFrame)
  i1494.cycleCount = i1495[8]
  i1494.rowIndex = i1495[9]
  i1494.flipU = i1495[10]
  i1494.flipV = i1495[11]
  i1494.spriteCount = i1495[12]
  var i1497 = i1495[13]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 2) {
  request.r(i1497[i + 0], i1497[i + 1], 2, i1496, '')
  }
  i1494.sprites = i1496
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1500 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[1], i1500.x)
  i1500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[2], i1500.y)
  i1500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[3], i1500.z)
  i1500.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[4], i1500.speedModifier)
  i1500.space = i1501[5]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1502 = root || new pc.ParticleSystemNoise()
  var i1503 = data
  i1502.enabled = !!i1503[0]
  i1502.separateAxes = !!i1503[1]
  i1502.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[2], i1502.strengthX)
  i1502.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[3], i1502.strengthY)
  i1502.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[4], i1502.strengthZ)
  i1502.frequency = i1503[5]
  i1502.damping = !!i1503[6]
  i1502.octaveCount = i1503[7]
  i1502.octaveMultiplier = i1503[8]
  i1502.octaveScale = i1503[9]
  i1502.quality = i1503[10]
  i1502.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[11], i1502.scrollSpeed)
  i1502.scrollSpeedMultiplier = i1503[12]
  i1502.remapEnabled = !!i1503[13]
  i1502.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[14], i1502.remapX)
  i1502.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[15], i1502.remapY)
  i1502.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[16], i1502.remapZ)
  i1502.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[17], i1502.positionAmount)
  i1502.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[18], i1502.rotationAmount)
  i1502.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[19], i1502.sizeAmount)
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1504 = root || new pc.ParticleSystemInheritVelocity()
  var i1505 = data
  i1504.enabled = !!i1505[0]
  i1504.mode = i1505[1]
  i1504.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[2], i1504.curve)
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1506 = root || new pc.ParticleSystemForceOverLifetime()
  var i1507 = data
  i1506.enabled = !!i1507[0]
  i1506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[1], i1506.x)
  i1506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[2], i1506.y)
  i1506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[3], i1506.z)
  i1506.space = i1507[4]
  i1506.randomized = !!i1507[5]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1508 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[1], i1508.limitX)
  i1508.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[2], i1508.limitY)
  i1508.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[3], i1508.limitZ)
  i1508.dampen = i1509[4]
  i1508.separateAxes = !!i1509[5]
  i1508.space = i1509[6]
  i1508.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[7], i1508.drag)
  i1508.multiplyDragByParticleSize = !!i1509[8]
  i1508.multiplyDragByParticleVelocity = !!i1509[9]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1511 = data
  i1510.enabled = !!i1511[0]
  request.r(i1511[1], i1511[2], 0, i1510, 'sharedMaterial')
  var i1513 = i1511[3]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.sharedMaterials = i1512
  i1510.receiveShadows = !!i1511[4]
  i1510.shadowCastingMode = i1511[5]
  i1510.sortingLayerID = i1511[6]
  i1510.sortingOrder = i1511[7]
  i1510.lightmapIndex = i1511[8]
  i1510.lightmapSceneIndex = i1511[9]
  i1510.lightmapScaleOffset = new pc.Vec4( i1511[10], i1511[11], i1511[12], i1511[13] )
  i1510.lightProbeUsage = i1511[14]
  i1510.reflectionProbeUsage = i1511[15]
  request.r(i1511[16], i1511[17], 0, i1510, 'mesh')
  i1510.meshCount = i1511[18]
  i1510.activeVertexStreamsCount = i1511[19]
  i1510.alignment = i1511[20]
  i1510.renderMode = i1511[21]
  i1510.sortMode = i1511[22]
  i1510.lengthScale = i1511[23]
  i1510.velocityScale = i1511[24]
  i1510.cameraVelocityScale = i1511[25]
  i1510.normalDirection = i1511[26]
  i1510.sortingFudge = i1511[27]
  i1510.minParticleSize = i1511[28]
  i1510.maxParticleSize = i1511[29]
  i1510.pivot = new pc.Vec3( i1511[30], i1511[31], i1511[32] )
  request.r(i1511[33], i1511[34], 0, i1510, 'trailMaterial')
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1517 = data
  i1516.name = i1517[0]
  i1516.tag = i1517[1]
  i1516.enabled = !!i1517[2]
  i1516.isStatic = !!i1517[3]
  i1516.layer = i1517[4]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.atlasId = i1519[1]
  i1518.mipmapCount = i1519[2]
  i1518.hdr = !!i1519[3]
  i1518.size = i1519[4]
  i1518.anisoLevel = i1519[5]
  i1518.filterMode = i1519[6]
  i1518.wrapMode = i1519[7]
  var i1521 = i1519[8]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 4) {
    i1520.push( UnityEngine.Rect.MinMaxRect(i1521[i + 0], i1521[i + 1], i1521[i + 2], i1521[i + 3]) );
  }
  i1518.rects = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.index = i1525[1]
  i1524.startup = !!i1525[2]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1527 = data
  i1526.enabled = !!i1527[0]
  i1526.aspect = i1527[1]
  i1526.orthographic = !!i1527[2]
  i1526.orthographicSize = i1527[3]
  i1526.backgroundColor = new pc.Color(i1527[4], i1527[5], i1527[6], i1527[7])
  i1526.nearClipPlane = i1527[8]
  i1526.farClipPlane = i1527[9]
  i1526.fieldOfView = i1527[10]
  i1526.depth = i1527[11]
  i1526.clearFlags = i1527[12]
  i1526.cullingMask = i1527[13]
  i1526.rect = i1527[14]
  request.r(i1527[15], i1527[16], 0, i1526, 'targetTexture')
  return i1526
}

Deserializers["IECControl"] = function (request, data, root) {
  var i1528 = root || request.c( 'IECControl' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'monsterbackscene')
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1531 = data
  request.r(i1531[0], i1531[1], 0, i1530, 'sharedMesh')
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'additionalVertexStreams')
  i1532.enabled = !!i1533[2]
  request.r(i1533[3], i1533[4], 0, i1532, 'sharedMaterial')
  var i1535 = i1533[5]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 2) {
  request.r(i1535[i + 0], i1535[i + 1], 2, i1534, '')
  }
  i1532.sharedMaterials = i1534
  i1532.receiveShadows = !!i1533[6]
  i1532.shadowCastingMode = i1533[7]
  i1532.sortingLayerID = i1533[8]
  i1532.sortingOrder = i1533[9]
  i1532.lightmapIndex = i1533[10]
  i1532.lightmapSceneIndex = i1533[11]
  i1532.lightmapScaleOffset = new pc.Vec4( i1533[12], i1533[13], i1533[14], i1533[15] )
  i1532.lightProbeUsage = i1533[16]
  i1532.reflectionProbeUsage = i1533[17]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1537 = data
  i1536.enabled = !!i1537[0]
  i1536.isTrigger = !!i1537[1]
  request.r(i1537[2], i1537[3], 0, i1536, 'material')
  request.r(i1537[4], i1537[5], 0, i1536, 'sharedMesh')
  i1536.convex = !!i1537[6]
  return i1536
}

Deserializers["Apartment"] = function (request, data, root) {
  var i1538 = root || request.c( 'Apartment' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'buildCam')
  return i1538
}

Deserializers["BrokenBuilding"] = function (request, data, root) {
  var i1540 = root || request.c( 'BrokenBuilding' )
  var i1541 = data
  i1540.IsBreakAll = !!i1541[0]
  var i1543 = i1541[1]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 1, i1542, '')
  }
  i1540.brickList1 = i1542
  var i1545 = i1541[2]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 1, i1544, '')
  }
  i1540.brickList2 = i1544
  var i1547 = i1541[3]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 1, i1546, '')
  }
  i1540.brickList3 = i1546
  var i1549 = i1541[4]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 1, i1548, '')
  }
  i1540.brickList4 = i1548
  var i1551 = i1541[5]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 1, i1550, '')
  }
  i1540.brickList5 = i1550
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1555 = data
  i1554.mass = i1555[0]
  i1554.drag = i1555[1]
  i1554.angularDrag = i1555[2]
  i1554.useGravity = !!i1555[3]
  i1554.isKinematic = !!i1555[4]
  i1554.constraints = i1555[5]
  i1554.maxAngularVelocity = i1555[6]
  i1554.collisionDetectionMode = i1555[7]
  i1554.interpolation = i1555[8]
  return i1554
}

Deserializers["Brick"] = function (request, data, root) {
  var i1556 = root || request.c( 'Brick' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'BrickRigid')
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.type = i1559[1]
  i1558.color = new pc.Color(i1559[2], i1559[3], i1559[4], i1559[5])
  i1558.cullingMask = i1559[6]
  i1558.intensity = i1559[7]
  i1558.range = i1559[8]
  i1558.spotAngle = i1559[9]
  i1558.shadows = i1559[10]
  i1558.shadowNormalBias = i1559[11]
  i1558.shadowBias = i1559[12]
  i1558.shadowStrength = i1559[13]
  i1558.shadowResolution = i1559[14]
  i1558.lightmapBakeType = i1559[15]
  i1558.renderMode = i1559[16]
  request.r(i1559[17], i1559[18], 0, i1558, 'cookie')
  i1558.cookieSize = i1559[19]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1561 = data
  i1560.pivot = new pc.Vec2( i1561[0], i1561[1] )
  i1560.anchorMin = new pc.Vec2( i1561[2], i1561[3] )
  i1560.anchorMax = new pc.Vec2( i1561[4], i1561[5] )
  i1560.sizeDelta = new pc.Vec2( i1561[6], i1561[7] )
  i1560.anchoredPosition3D = new pc.Vec3( i1561[8], i1561[9], i1561[10] )
  i1560.rotation = new pc.Quat(i1561[11], i1561[12], i1561[13], i1561[14])
  i1560.scale = new pc.Vec3( i1561[15], i1561[16], i1561[17] )
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1563 = data
  i1562.enabled = !!i1563[0]
  i1562.planeDistance = i1563[1]
  i1562.referencePixelsPerUnit = i1563[2]
  i1562.isFallbackOverlay = !!i1563[3]
  i1562.renderMode = i1563[4]
  i1562.renderOrder = i1563[5]
  i1562.sortingLayerName = i1563[6]
  i1562.sortingOrder = i1563[7]
  i1562.scaleFactor = i1563[8]
  request.r(i1563[9], i1563[10], 0, i1562, 'worldCamera')
  i1562.overrideSorting = !!i1563[11]
  i1562.pixelPerfect = !!i1563[12]
  i1562.targetDisplay = i1563[13]
  i1562.overridePixelPerfect = !!i1563[14]
  return i1562
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1565 = data
  i1564.m_UiScaleMode = i1565[0]
  i1564.m_ReferencePixelsPerUnit = i1565[1]
  i1564.m_ScaleFactor = i1565[2]
  i1564.m_ReferenceResolution = new pc.Vec2( i1565[3], i1565[4] )
  i1564.m_ScreenMatchMode = i1565[5]
  i1564.m_MatchWidthOrHeight = i1565[6]
  i1564.m_PhysicalUnit = i1565[7]
  i1564.m_FallbackScreenDPI = i1565[8]
  i1564.m_DefaultSpriteDPI = i1565[9]
  i1564.m_DynamicPixelsPerUnit = i1565[10]
  return i1564
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1567 = data
  i1566.m_IgnoreReversedGraphics = !!i1567[0]
  i1566.m_BlockingObjects = i1567[1]
  i1566.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1567[2] )
  return i1566
}

Deserializers["Scope"] = function (request, data, root) {
  var i1568 = root || request.c( 'Scope' )
  var i1569 = data
  var i1571 = i1569[0]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 1, i1570, '')
  }
  i1568.scopeImgList = i1570
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1575 = data
  i1574.cullTransparentMesh = !!i1575[0]
  return i1574
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Image' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_Sprite')
  i1576.m_Type = i1577[2]
  i1576.m_PreserveAspect = !!i1577[3]
  i1576.m_FillCenter = !!i1577[4]
  i1576.m_FillMethod = i1577[5]
  i1576.m_FillAmount = i1577[6]
  i1576.m_FillClockwise = !!i1577[7]
  i1576.m_FillOrigin = i1577[8]
  i1576.m_UseSpriteMesh = !!i1577[9]
  i1576.m_PixelsPerUnitMultiplier = i1577[10]
  request.r(i1577[11], i1577[12], 0, i1576, 'm_Material')
  i1576.m_Maskable = !!i1577[13]
  i1576.m_Color = new pc.Color(i1577[14], i1577[15], i1577[16], i1577[17])
  i1576.m_RaycastTarget = !!i1577[18]
  return i1576
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1579 = data
  i1578.m_ShowMaskGraphic = !!i1579[0]
  return i1578
}

Deserializers["CutoutMask"] = function (request, data, root) {
  var i1580 = root || request.c( 'CutoutMask' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'm_Material')
  request.r(i1581[2], i1581[3], 0, i1580, 'm_Sprite')
  i1580.m_Type = i1581[4]
  i1580.m_PreserveAspect = !!i1581[5]
  i1580.m_FillCenter = !!i1581[6]
  i1580.m_FillMethod = i1581[7]
  i1580.m_FillAmount = i1581[8]
  i1580.m_FillClockwise = !!i1581[9]
  i1580.m_FillOrigin = i1581[10]
  i1580.m_UseSpriteMesh = !!i1581[11]
  i1580.m_PixelsPerUnitMultiplier = i1581[12]
  i1580.m_Maskable = !!i1581[13]
  i1580.m_Color = new pc.Color(i1581[14], i1581[15], i1581[16], i1581[17])
  i1580.m_RaycastTarget = !!i1581[18]
  return i1580
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'm_FirstSelected')
  i1582.m_sendNavigationEvents = !!i1583[2]
  i1582.m_DragThreshold = i1583[3]
  return i1582
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1585 = data
  i1584.m_HorizontalAxis = i1585[0]
  i1584.m_VerticalAxis = i1585[1]
  i1584.m_SubmitButton = i1585[2]
  i1584.m_CancelButton = i1585[3]
  i1584.m_InputActionsPerSecond = i1585[4]
  i1584.m_RepeatDelay = i1585[5]
  i1584.m_ForceModuleActive = !!i1585[6]
  return i1584
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i1587 = data
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1589 = data
  i1588.playAutomatically = !!i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, 'clip')
  var i1591 = i1589[3]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.clips = i1590
  i1588.wrapMode = i1589[4]
  i1588.enabled = !!i1589[5]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'animatorController')
  i1594.updateMode = i1595[2]
  var i1597 = i1595[3]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 2) {
  request.r(i1597[i + 0], i1597[i + 1], 2, i1596, '')
  }
  i1594.humanBones = i1596
  i1594.enabled = !!i1595[4]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'sharedMaterial')
  var i1603 = i1601[3]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 2, i1602, '')
  }
  i1600.sharedMaterials = i1602
  i1600.receiveShadows = !!i1601[4]
  i1600.shadowCastingMode = i1601[5]
  i1600.sortingLayerID = i1601[6]
  i1600.sortingOrder = i1601[7]
  i1600.lightmapIndex = i1601[8]
  i1600.lightmapSceneIndex = i1601[9]
  i1600.lightmapScaleOffset = new pc.Vec4( i1601[10], i1601[11], i1601[12], i1601[13] )
  i1600.lightProbeUsage = i1601[14]
  i1600.reflectionProbeUsage = i1601[15]
  request.r(i1601[16], i1601[17], 0, i1600, 'sharedMesh')
  var i1605 = i1601[18]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 2) {
  request.r(i1605[i + 0], i1605[i + 1], 2, i1604, '')
  }
  i1600.bones = i1604
  i1600.updateWhenOffscreen = !!i1601[19]
  i1600.localBounds = i1601[20]
  request.r(i1601[21], i1601[22], 0, i1600, 'rootBone')
  var i1607 = i1601[23]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1607[i + 0]) );
  }
  i1600.blendShapesWeights = i1606
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1611 = data
  i1610.weight = i1611[0]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1613 = data
  i1612.ambientIntensity = i1613[0]
  i1612.reflectionIntensity = i1613[1]
  i1612.ambientMode = i1613[2]
  i1612.ambientLight = new pc.Color(i1613[3], i1613[4], i1613[5], i1613[6])
  i1612.ambientSkyColor = new pc.Color(i1613[7], i1613[8], i1613[9], i1613[10])
  i1612.ambientGroundColor = new pc.Color(i1613[11], i1613[12], i1613[13], i1613[14])
  i1612.ambientEquatorColor = new pc.Color(i1613[15], i1613[16], i1613[17], i1613[18])
  i1612.fogColor = new pc.Color(i1613[19], i1613[20], i1613[21], i1613[22])
  i1612.fogEndDistance = i1613[23]
  i1612.fogStartDistance = i1613[24]
  i1612.fogDensity = i1613[25]
  i1612.fog = !!i1613[26]
  request.r(i1613[27], i1613[28], 0, i1612, 'skybox')
  i1612.fogMode = i1613[29]
  var i1615 = i1613[30]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1615[i + 0]) );
  }
  i1612.lightmaps = i1614
  i1612.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1613[31], i1612.lightProbes)
  i1612.lightmapsMode = i1613[32]
  i1612.environmentLightingMode = i1613[33]
  i1612.ambientProbe = new pc.SphericalHarmonicsL2(i1613[34])
  i1612.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1613[35])
  i1612.useReferenceAmbientProbe = !!i1613[36]
  request.r(i1613[37], i1613[38], 0, i1612, 'customReflection')
  request.r(i1613[39], i1613[40], 0, i1612, 'defaultReflection')
  i1612.defaultReflectionMode = i1613[41]
  i1612.defaultReflectionResolution = i1613[42]
  i1612.sunLightObjectId = i1613[43]
  i1612.pixelLightCount = i1613[44]
  i1612.defaultReflectionHDR = !!i1613[45]
  i1612.hasLightDataAsset = !!i1613[46]
  i1612.hasManualGenerate = !!i1613[47]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'lightmapColor')
  request.r(i1619[2], i1619[3], 0, i1618, 'lightmapDirection')
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1620 = root || new UnityEngine.LightProbes()
  var i1621 = data
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(i1631[i + 0]);
  }
  i1628.invalidShaderVariants = i1630
  i1628.name = i1629[1]
  i1628.guid = i1629[2]
  var i1633 = i1629[3]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( i1633[i + 0] );
  }
  i1628.shaderDefinedKeywords = i1632
  var i1635 = i1629[4]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1635[i + 0]) );
  }
  i1628.passes = i1634
  var i1637 = i1629[5]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1637[i + 0]) );
  }
  i1628.usePasses = i1636
  var i1639 = i1629[6]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1639[i + 0]) );
  }
  i1628.defaultParameterValues = i1638
  request.r(i1629[7], i1629[8], 0, i1628, 'unityFallbackShader')
  i1628.readDepth = !!i1629[9]
  i1628.isCreatedByShaderGraph = !!i1629[10]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1646 = root || new pc.UnityShaderPass()
  var i1647 = data
  i1646.id = i1647[0]
  i1646.subShaderIndex = i1647[1]
  i1646.name = i1647[2]
  i1646.passType = i1647[3]
  i1646.usePass = !!i1647[4]
  i1646.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[5], i1646.zTest)
  i1646.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[6], i1646.zWrite)
  i1646.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[7], i1646.culling)
  i1646.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1647[8], i1646.blending)
  i1646.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1647[9], i1646.alphaBlending)
  i1646.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[10], i1646.colorWriteMask)
  i1646.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[11], i1646.offsetUnits)
  i1646.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[12], i1646.offsetFactor)
  i1646.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[13], i1646.stencilRef)
  i1646.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[14], i1646.stencilReadMask)
  i1646.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1647[15], i1646.stencilWriteMask)
  i1646.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1647[16], i1646.stencilOp)
  i1646.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1647[17], i1646.stencilOpFront)
  i1646.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1647[18], i1646.stencilOpBack)
  var i1649 = i1647[19]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1649[i + 0]) );
  }
  i1646.tags = i1648
  var i1651 = i1647[20]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( i1651[i + 0] );
  }
  i1646.passDefinedKeywords = i1650
  var i1653 = i1647[21]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1653[i + 0]) );
  }
  i1646.passDefinedKeywordGroups = i1652
  var i1655 = i1647[22]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1655[i + 0]) );
  }
  i1646.variants = i1654
  var i1657 = i1647[23]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1657[i + 0]) );
  }
  i1646.excludedVariants = i1656
  i1646.hasDepthReader = !!i1647[24]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1659 = data
  i1658.val = i1659[0]
  i1658.name = i1659[1]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1661 = data
  i1660.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[0], i1660.src)
  i1660.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[1], i1660.dst)
  i1660.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[2], i1660.op)
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1663 = data
  i1662.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[0], i1662.pass)
  i1662.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[1], i1662.fail)
  i1662.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[2], i1662.zFail)
  i1662.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[3], i1662.comp)
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.value = i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1671 = data
  var i1673 = i1671[0]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( i1673[i + 0] );
  }
  i1670.keywords = i1672
  i1670.hasDiscard = !!i1671[1]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1677 = data
  i1676.passId = i1677[0]
  i1676.subShaderIndex = i1677[1]
  var i1679 = i1677[2]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1676.keywords = i1678
  i1676.vertexProgram = i1677[3]
  i1676.fragmentProgram = i1677[4]
  i1676.readDepth = !!i1677[5]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'shader')
  i1682.pass = i1683[2]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.type = i1687[1]
  i1686.value = new pc.Vec4( i1687[2], i1687[3], i1687[4], i1687[5] )
  i1686.textureValue = i1687[6]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1689 = data
  i1688.name = i1689[0]
  request.r(i1689[1], i1689[2], 0, i1688, 'texture')
  i1688.aabb = i1689[3]
  i1688.vertices = i1689[4]
  i1688.triangles = i1689[5]
  i1688.textureRect = UnityEngine.Rect.MinMaxRect(i1689[6], i1689[7], i1689[8], i1689[9])
  i1688.packedRect = UnityEngine.Rect.MinMaxRect(i1689[10], i1689[11], i1689[12], i1689[13])
  i1688.border = new pc.Vec4( i1689[14], i1689[15], i1689[16], i1689[17] )
  i1688.transparency = i1689[18]
  i1688.bounds = i1689[19]
  i1688.pixelsPerUnit = i1689[20]
  i1688.textureWidth = i1689[21]
  i1688.textureHeight = i1689[22]
  i1688.nativeSize = new pc.Vec2( i1689[23], i1689[24] )
  i1688.pivot = new pc.Vec2( i1689[25], i1689[26] )
  i1688.textureRectOffset = new pc.Vec2( i1689[27], i1689[28] )
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.wrapMode = i1691[1]
  i1690.isLooping = !!i1691[2]
  i1690.length = i1691[3]
  var i1693 = i1691[4]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1693[i + 0]) );
  }
  i1690.curves = i1692
  var i1695 = i1691[5]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1695[i + 0]) );
  }
  i1690.events = i1694
  i1690.halfPrecision = !!i1691[6]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1699 = data
  i1698.path = i1699[0]
  i1698.componentType = i1699[1]
  i1698.property = i1699[2]
  i1698.keys = i1699[3]
  var i1701 = i1699[4]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1701[i + 0]) );
  }
  i1698.objectReferenceKeys = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1705 = data
  i1704.time = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'value')
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1709 = data
  i1708.functionName = i1709[0]
  i1708.floatParameter = i1709[1]
  i1708.intParameter = i1709[2]
  i1708.stringParameter = i1709[3]
  request.r(i1709[4], i1709[5], 0, i1708, 'objectReferenceParameter')
  i1708.time = i1709[6]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1711 = data
  i1710.name = i1711[0]
  var i1713 = i1711[1]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1713[i + 0]) );
  }
  i1710.states = i1712
  var i1715 = i1711[2]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1715[i + 0]) );
  }
  i1710.layers = i1714
  var i1717 = i1711[3]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1717[i + 0]) );
  }
  i1710.parameters = i1716
  var i1719 = i1711[4]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1710.animationClips = i1718
  i1710.HasSubStateMachines = !!i1711[5]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1723 = data
  i1722.cycleOffset = i1723[0]
  i1722.cycleOffsetParameter = i1723[1]
  i1722.cycleOffsetParameterActive = !!i1723[2]
  i1722.mirror = !!i1723[3]
  i1722.mirrorParameter = i1723[4]
  i1722.mirrorParameterActive = !!i1723[5]
  i1722.motionId = i1723[6]
  i1722.nameHash = i1723[7]
  i1722.fullPathHash = i1723[8]
  i1722.speed = i1723[9]
  i1722.speedParameter = i1723[10]
  i1722.speedParameterActive = !!i1723[11]
  i1722.tag = i1723[12]
  i1722.name = i1723[13]
  i1722.layer = i1723[14]
  i1722.writeDefaultValues = !!i1723[15]
  var i1725 = i1723[16]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1725[i + 0]) );
  }
  i1722.transitions = i1724
  var i1727 = i1723[17]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 2, i1726, '')
  }
  i1722.behaviours = i1726
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1731 = data
  i1730.fullPath = i1731[0]
  i1730.canTransitionToSelf = !!i1731[1]
  i1730.duration = i1731[2]
  i1730.exitTime = i1731[3]
  i1730.hasExitTime = !!i1731[4]
  i1730.hasFixedDuration = !!i1731[5]
  i1730.interruptionSource = i1731[6]
  i1730.offset = i1731[7]
  i1730.orderedInterruption = !!i1731[8]
  i1730.destinationStateNameHash = i1731[9]
  i1730.destinationStateMachineId = i1731[10]
  i1730.isExit = !!i1731[11]
  i1730.mute = !!i1731[12]
  i1730.solo = !!i1731[13]
  var i1733 = i1731[14]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1733[i + 0]) );
  }
  i1730.conditions = i1732
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1739 = data
  i1738.blendingMode = i1739[0]
  i1738.defaultWeight = i1739[1]
  i1738.name = i1739[2]
  i1738.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1739[3], i1738.stateMachine)
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1741 = data
  i1740.id = i1741[0]
  i1740.defaultStateNameHash = i1741[1]
  var i1743 = i1741[2]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1743[i + 0]) );
  }
  i1740.entryTransitions = i1742
  var i1745 = i1741[3]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1745[i + 0]) );
  }
  i1740.anyStateTransitions = i1744
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1749 = data
  i1748.destinationStateNameHash = i1749[0]
  i1748.destinationStateMachineId = i1749[1]
  i1748.isExit = !!i1749[2]
  i1748.mute = !!i1749[3]
  i1748.solo = !!i1749[4]
  var i1751 = i1749[5]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1751[i + 0]) );
  }
  i1748.conditions = i1750
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1755 = data
  i1754.defaultBool = !!i1755[0]
  i1754.defaultFloat = i1755[1]
  i1754.defaultInt = i1755[2]
  i1754.name = i1755[3]
  i1754.nameHash = i1755[4]
  i1754.type = i1755[5]
  return i1754
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1757 = data
  i1756.useSafeMode = !!i1757[0]
  i1756.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1757[1], i1756.safeModeOptions)
  i1756.timeScale = i1757[2]
  i1756.useSmoothDeltaTime = !!i1757[3]
  i1756.maxSmoothUnscaledTime = i1757[4]
  i1756.rewindCallbackMode = i1757[5]
  i1756.showUnityEditorReport = !!i1757[6]
  i1756.logBehaviour = i1757[7]
  i1756.drawGizmos = !!i1757[8]
  i1756.defaultRecyclable = !!i1757[9]
  i1756.defaultAutoPlay = i1757[10]
  i1756.defaultUpdateType = i1757[11]
  i1756.defaultTimeScaleIndependent = !!i1757[12]
  i1756.defaultEaseType = i1757[13]
  i1756.defaultEaseOvershootOrAmplitude = i1757[14]
  i1756.defaultEasePeriod = i1757[15]
  i1756.defaultAutoKill = !!i1757[16]
  i1756.defaultLoopType = i1757[17]
  i1756.showPreviewPanel = !!i1757[18]
  i1756.storeSettingsLocation = i1757[19]
  i1756.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1757[20], i1756.modules)
  i1756.showPlayingTweens = !!i1757[21]
  i1756.showPausedTweens = !!i1757[22]
  return i1756
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1759 = data
  i1758.nestedTweenFailureBehaviour = i1759[0]
  return i1758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1761 = data
  i1760.showPanel = !!i1761[0]
  i1760.audioEnabled = !!i1761[1]
  i1760.physicsEnabled = !!i1761[2]
  i1760.physics2DEnabled = !!i1761[3]
  i1760.spriteEnabled = !!i1761[4]
  i1760.uiEnabled = !!i1761[5]
  i1760.textMeshProEnabled = !!i1761[6]
  i1760.tk2DEnabled = !!i1761[7]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1765[i + 0]) );
  }
  i1762.files = i1764
  i1762.componentToPrefabIds = i1763[1]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1769 = data
  i1768.path = i1769[0]
  request.r(i1769[1], i1769[2], 0, i1768, 'unityObject')
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1771 = data
  var i1773 = i1771[0]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1773[i + 0]) );
  }
  i1770.scriptsExecutionOrder = i1772
  var i1775 = i1771[1]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1775[i + 0]) );
  }
  i1770.sortingLayers = i1774
  var i1777 = i1771[2]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1777[i + 0]) );
  }
  i1770.cullingLayers = i1776
  i1770.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1771[3], i1770.timeSettings)
  i1770.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1771[4], i1770.physicsSettings)
  i1770.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1771[5], i1770.physics2DSettings)
  i1770.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1771[6], i1770.qualitySettings)
  i1770.enableRealtimeShadows = !!i1771[7]
  i1770.autoInstantiatePrefabs = !!i1771[8]
  i1770.enableAutoInstancing = !!i1771[9]
  i1770.lightmapEncodingQuality = i1771[10]
  i1770.desiredColorSpace = i1771[11]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.value = i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1785 = data
  i1784.id = i1785[0]
  i1784.name = i1785[1]
  i1784.value = i1785[2]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1789 = data
  i1788.id = i1789[0]
  i1788.name = i1789[1]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1791 = data
  i1790.fixedDeltaTime = i1791[0]
  i1790.maximumDeltaTime = i1791[1]
  i1790.timeScale = i1791[2]
  i1790.maximumParticleTimestep = i1791[3]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1793 = data
  i1792.gravity = new pc.Vec3( i1793[0], i1793[1], i1793[2] )
  i1792.defaultSolverIterations = i1793[3]
  i1792.bounceThreshold = i1793[4]
  i1792.autoSyncTransforms = !!i1793[5]
  i1792.autoSimulation = !!i1793[6]
  var i1795 = i1793[7]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1795[i + 0]) );
  }
  i1792.collisionMatrix = i1794
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1799 = data
  i1798.enabled = !!i1799[0]
  i1798.layerId = i1799[1]
  i1798.otherLayerId = i1799[2]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'material')
  i1800.gravity = new pc.Vec2( i1801[2], i1801[3] )
  i1800.positionIterations = i1801[4]
  i1800.velocityIterations = i1801[5]
  i1800.velocityThreshold = i1801[6]
  i1800.maxLinearCorrection = i1801[7]
  i1800.maxAngularCorrection = i1801[8]
  i1800.maxTranslationSpeed = i1801[9]
  i1800.maxRotationSpeed = i1801[10]
  i1800.timeToSleep = i1801[11]
  i1800.linearSleepTolerance = i1801[12]
  i1800.angularSleepTolerance = i1801[13]
  i1800.defaultContactOffset = i1801[14]
  i1800.autoSimulation = !!i1801[15]
  i1800.queriesHitTriggers = !!i1801[16]
  i1800.queriesStartInColliders = !!i1801[17]
  i1800.callbacksOnDisable = !!i1801[18]
  i1800.reuseCollisionCallbacks = !!i1801[19]
  i1800.autoSyncTransforms = !!i1801[20]
  var i1803 = i1801[21]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1803[i + 0]) );
  }
  i1800.collisionMatrix = i1802
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.layerId = i1807[1]
  i1806.otherLayerId = i1807[2]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1811[i + 0]) );
  }
  i1808.qualityLevels = i1810
  var i1813 = i1809[1]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( i1813[i + 0] );
  }
  i1808.names = i1812
  i1808.shadows = i1809[2]
  i1808.anisotropicFiltering = i1809[3]
  i1808.antiAliasing = i1809[4]
  i1808.lodBias = i1809[5]
  i1808.shadowCascades = i1809[6]
  i1808.shadowDistance = i1809[7]
  i1808.shadowmaskMode = i1809[8]
  i1808.shadowProjection = i1809[9]
  i1808.shadowResolution = i1809[10]
  i1808.softParticles = !!i1809[11]
  i1808.softVegetation = !!i1809[12]
  i1808.activeColorSpace = i1809[13]
  i1808.desiredColorSpace = i1809[14]
  i1808.masterTextureLimit = i1809[15]
  i1808.maxQueuedFrames = i1809[16]
  i1808.particleRaycastBudget = i1809[17]
  i1808.pixelLightCount = i1809[18]
  i1808.realtimeReflectionProbes = !!i1809[19]
  i1808.shadowCascade2Split = i1809[20]
  i1808.shadowCascade4Split = new pc.Vec3( i1809[21], i1809[22], i1809[23] )
  i1808.streamingMipmapsActive = !!i1809[24]
  i1808.vSyncCount = i1809[25]
  i1808.asyncUploadBufferSize = i1809[26]
  i1808.asyncUploadTimeSlice = i1809[27]
  i1808.billboardsFaceCameraPosition = !!i1809[28]
  i1808.shadowNearPlaneOffset = i1809[29]
  i1808.streamingMipmapsMemoryBudget = i1809[30]
  i1808.maximumLODLevel = i1809[31]
  i1808.streamingMipmapsAddAllCameras = !!i1809[32]
  i1808.streamingMipmapsMaxLevelReduction = i1809[33]
  i1808.streamingMipmapsRenderersPerFrame = i1809[34]
  i1808.resolutionScalingFixedDPIFactor = i1809[35]
  i1808.streamingMipmapsMaxFileIORequests = i1809[36]
  i1808.currentQualityLevel = i1809[37]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1819 = data
  i1818.weight = i1819[0]
  i1818.vertices = i1819[1]
  i1818.normals = i1819[2]
  i1818.tangents = i1819[3]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1823 = data
  i1822.mode = i1823[0]
  i1822.parameter = i1823[1]
  i1822.threshold = i1823[2]
  return i1822
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[38],"48":[8],"49":[18],"50":[18],"51":[18],"52":[18],"53":[18],"54":[18],"55":[18],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[8],"71":[13],"72":[73],"74":[73],"21":[20],"30":[26,20],"75":[20],"76":[26,20],"24":[21],"27":[26,20],"77":[20],"23":[21],"78":[20],"79":[20],"80":[20],"81":[20],"82":[20],"83":[20],"84":[20],"29":[20],"85":[26,20],"86":[26,20],"87":[20],"88":[20],"89":[20],"90":[20],"91":[26,20],"92":[20],"93":[31],"94":[31],"32":[31],"95":[31],"96":[8],"97":[8],"98":[20],"99":[26,20],"100":[13,12],"101":[26,20],"102":[26,20],"103":[13,12,26,20],"104":[20,26],"105":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","IECControl","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","Apartment","BrokenBuilding","Brick","UnityEngine.Rigidbody","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Scope","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Mask","CutoutMask","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.33f1";

Deserializers.productName = "GiantWantedPlayable";

Deserializers.lunaInitializationTime = "03/30/2022 03:35:59";

Deserializers.lunaDaysRunning = "257.3";

Deserializers.lunaVersion = "4.2.0";

Deserializers.lunaSHA = "d56dc2bfc365c362dac9adcf4089e5b520e71130";

Deserializers.creativeName = "PLY3-QuangNH-Luna";

Deserializers.lunaAppID = "14522";

Deserializers.projectId = "3c8c6a4f-ab91-4177-8cf8-4821d5d9b1ce";

Deserializers.packagesInfo = "com.unity.textmeshpro: 2.0.0\ncom.unity.timeline: 1.2.18\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "https://play.google.com/store/apps/details?id=com.unicorn.magic.hand";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1074";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4237";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.GiantWantedPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "c2173518-1ad2-4d60-a387-cc487d41c4e4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

