"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[9],{46:(t,i,e)=>{var o=e(1),n=e(0),s=e(36);const a=new o.l,r=new Goblin.Vector3,l=new Goblin.Vector3,d=new Goblin.Quaternion,h=new o.l,c=new o.i;function _(t){switch(t){case 0:return Goblin.RigidBody.CollisionDetectionMode.Discrete;case 1:case 2:return Goblin.RigidBody.CollisionDetectionMode.ContinuousConservativeAdvancement;case 3:return Goblin.RigidBody.CollisionDetectionMode.ContinuousSpeculative;default:throw new Error("Unrecognized collision detection mode")}}class y extends n.k{constructor(t={}){super();const i={mass:1,drag:0,angularDrag:0,useGravity:!0,isKinematic:!1,collisionDetectionMode:0,enabled:!0,maxAngularVelocity:7,constraints:0,interpolation:UnityEngine.RigidbodyInterpolation.None,goblinBody:null};t=Object.assign(i,t),this.id=y.uid++,this._body=t.goblinBody||new Goblin.RigidBody(this.id,t.mass),this._body._component=this,this._body.linear_damping=t.drag||0,this._body.angular_damping=t.angularDrag||0,this._body.useGravity=!!t.useGravity,this._body.isKinematic=t.isKinematic,this._body.collisionDetectionMode=_(t.collisionDetectionMode),this._body.maxAngularVelocity=Math.abs(t.maxAngularVelocity),this._enabled=t.enabled,this._collisionDetectionMode=t.collisionDetectionMode,this.constraints=t.constraints||0,this.interpolation=t.interpolation||UnityEngine.RigidbodyInterpolation.None,this._previousSyncPosition=new o.l,this._previousSyncRotation=new o.i,this.interpolatedPosition=new o.l,this.interpolatedRotation=new o.i,this.interpolatedFraction=0,this.interpolatedAABBVersion=0,this._dirtyPosition=!1,this._dirtyRotation=!1,this._worldTransformVersion=-1,this._adapter=n.a.getApplication().systems.physics.adapter,this["__UnityEngine.Rigidbody"]=null,pc.markPhysics3dModuleAsUsed(),TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"RigidbodyComponent")}get body(){return this._body}get position(){const t=new o.l;return this._body.getTransform(t,c),t}set position(t){r.set(t.x,t.y,t.z),this._body.setPosition(r),this._dirtyPosition=!0}get constraints(){let t=0;return this._body.positionLockX&&(t|=UnityEngine.RigidbodyConstraints.FreezePositionX),this._body.positionLockY&&(t|=UnityEngine.RigidbodyConstraints.FreezePositionY),this._body.positionLockZ&&(t|=UnityEngine.RigidbodyConstraints.FreezePositionZ),this._body.rotationLockX&&(t|=UnityEngine.RigidbodyConstraints.FreezeRotationX),this._body.rotationLockY&&(t|=UnityEngine.RigidbodyConstraints.FreezeRotationY),this._body.rotationLockZ&&(t|=UnityEngine.RigidbodyConstraints.FreezeRotationZ),t}set constraints(t){this._body.positionLockX=!!(t&UnityEngine.RigidbodyConstraints.FreezePositionX),this._body.positionLockY=!!(t&UnityEngine.RigidbodyConstraints.FreezePositionY),this._body.positionLockZ=!!(t&UnityEngine.RigidbodyConstraints.FreezePositionZ),this._body.rotationLockX=!!(t&UnityEngine.RigidbodyConstraints.FreezeRotationX),this._body.rotationLockY=!!(t&UnityEngine.RigidbodyConstraints.FreezeRotationY),this._body.rotationLockZ=!!(t&UnityEngine.RigidbodyConstraints.FreezeRotationZ),this._body.wakeUp()}get rotation(){const t=this._body.getRotation();return new o.i(t.x,t.y,t.z,t.w)}set rotation(t){d.set(t.x,t.y,t.z,t.w),this._body.setRotation(d),this._dirtyRotation=!0}get angularDrag(){return this._body.angular_damping}set angularDrag(t){this._body.angular_damping=t}get drag(){return this._body.linear_damping}set drag(t){this._body.linear_damping=t}get angularVelocity(){const t=this._body.angular_velocity;return new o.l(t.x,t.y,t.z)}set angularVelocity(t){r.x=t.x,r.y=t.y,r.z=t.z,this._body.setAngularVelocity(r)}get velocity(){const t=this._body.linear_velocity;return new o.l(t.x,t.y,t.z)}set velocity(t){r.x=t.x,r.y=t.y,r.z=t.z,this._body.setLinearVelocity(r)}get centerOfMass(){const t=this._body.getCenterOfMass();return new o.l(t.x,t.y,t.z)}set centerOfMass(t){r.set(t.x,t.y,t.z),this._body.overrideCenterOfMass(r)}get mass(){return this._body.mass}set mass(t){this._body.mass=t}get maxAngularVelocity(){return this._body.maxAngularVelocity}set maxAngularVelocity(t){this._body.maxAngularVelocity=Math.abs(t)}get inertiaTensor(){const t=this.body.getDiagonalizedInertiaTensor();return h.set(t.x,t.y,t.z),h}set inertiaTensor(t){throw new Error("Not implemented")}get inertiaTensorRotation(){const t=this.body.getDiagonalizedInertiaTensorRotation();return c.set(t.x,t.y,t.z,t.w),c}set inertiaTensorRotation(t){throw new Error("Not implemented")}get isKinematic(){return this._body.isKinematic}set isKinematic(t){this._body.isKinematic=t}get isStatic(){return this._body.isStatic}set isStatic(t){this._body.isStatic=t}get useGravity(){return this._body.useGravity}set useGravity(t){this._body.useGravity=t}get disableCollisions(){return this._body.disableCollisions}set disableCollisions(t){this._body.disableCollisions=t}get collisionDetectionMode(){return this._collisionDetectionMode}set collisionDetectionMode(t){this._body.collisionDetectionMode=_(t),this._collisionDetectionMode=t}addLinearForce(t,i,e){switch(a.copy(t),e&&this._body.getRotation().transformVector3(a),i){case UnityEngine.ForceMode.Force:a.scale(UnityEngine.Time.fixedDeltaTime),this._body.addLinearImpulse(a);break;case UnityEngine.ForceMode.Acceleration:a.scale(this._body.mass),a.scale(UnityEngine.Time.fixedDeltaTime),this._body.addLinearImpulse(a);break;case UnityEngine.ForceMode.Impulse:a.scale(1/this._body.mass),this._body.addLinearVelocity(a);break;case UnityEngine.ForceMode.VelocityChange:this._body.addLinearVelocity(a);break;default:throw new Error("Not Implemented")}}addLinearForceAtPosition(t,i,e){switch(a.copy(t),r.set(i.x,i.y,i.z),e){case UnityEngine.ForceMode.Force:a.scale(UnityEngine.Time.fixedDeltaTime),l.set(a.x,a.y,a.z),this._body.applyImpulseAtWorldPoint(l,r);break;case UnityEngine.ForceMode.Acceleration:a.scale(this._body.mass),a.scale(UnityEngine.Time.fixedDeltaTime),l.set(a.x,a.y,a.z),this._body.applyImpulseAtWorldPoint(l,r);break;case UnityEngine.ForceMode.Impulse:l.set(a.x,a.y,a.z),this._body.applyImpulseAtWorldPoint(l,r);break;case UnityEngine.ForceMode.VelocityChange:a.scale(this._body.mass),l.set(a.x,a.y,a.z),this._body.applyImpulseAtWorldPoint(l,r);break;default:throw new Error("Not Implemented")}}getPointVelocity(t){r.set(t.x,t.y,t.z),this._body.getVelocityInGlobalPoint(r,l);const i=new o.l;return i.set(l.x,l.y,l.z),i}addAngularForce(t,i,e){switch(a.copy(t),e&&this._body.getRotation().transformVector3(a),i){case UnityEngine.ForceMode.Force:a.scale(UnityEngine.Time.fixedDeltaTime),this._body.addAngularImpulse(a);break;case UnityEngine.ForceMode.Acceleration:a.scale(UnityEngine.Time.fixedDeltaTime),this._body.addAngularVelocity(a);break;case UnityEngine.ForceMode.Impulse:this._body.addAngularImpulse(a);break;case UnityEngine.ForceMode.VelocityChange:this._body.addAngularVelocity(a);break;default:throw new Error("Not Implemented")}}onEnable(){return!!super.onEnable()&&(this._adapter.enableRigidbody(this),!0)}onDisable(){return!!super.onDisable()&&(this._adapter.disableRigidbody(this),!0)}movePosition(t){r.set(t.x,t.y,t.z),this._body.setPosition(r),this._dirtyPosition=!0}moveRotation(t){d.set(t.x,t.y,t.z,t.w),this._body.setRotation(d),this._dirtyRotation=!0}rayIntersect(t,i,e){r.set(t.x,t.y,t.z),l.set(i.x,i.y,i.z);const o=[];return this._body.rayIntersect(r,l,e,-1,!0,o),o}closestPointOnBounds(t){r.set(t.x,t.y,t.z),this._body.getClosestPointOnBounds(r,l);const i=new o.l;return i.set(l.x,l.y,l.z),i}wakeUp(){this._body.wakeUp(!0)}sleep(){this._body.isSleeping=!0}isSleeping(){return this._body.isSleeping}resetCenterOfMass(){this._body.resetCenterOfMass()}isInterpolationOrExtrapolationEnabled(){return this.interpolation!==UnityEngine.RigidbodyInterpolation.None}shouldInterpolatePosition(){return this.interpolation===UnityEngine.RigidbodyInterpolation.Interpolate}shouldExtrapolatePosition(){return this.interpolation===UnityEngine.RigidbodyInterpolation.Extrapolate}}y.uid=0,y.fromStaticBody=t=>{const i=new y({goblinBody:t});return t.id=i.id,t._component=null,t._fauxComponent=i,i};const p=new o.l,u=new o.i,g=new o.l,b=new o.i,m=new Goblin.Vector3,S=new Goblin.Quaternion;class C extends s.a{setup(){this.wheelColliders=[],this._world=this.options.world,this._world.eventEmitter._onCollisionContactEnter=this.onCollisionContactEnter.bind(this),this._world.eventEmitter._onCollisionContactStay=this.onCollisionContactStay.bind(this),this._world.eventEmitter._onCollisionContactExit=this.onCollisionContactExit.bind(this),this._world.eventEmitter._onTriggerContactEnter=this.onTriggerContactEnter.bind(this),this._world.eventEmitter._onTriggerContactStay=this.onTriggerContactStay.bind(this),this._world.eventEmitter._onTriggerContactExit=this.onTriggerContactExit.bind(this),this.integratedTime=0,this.integratedPhysicsTime=0}addRigidbody(t){t.world||(this.synchronizeBodyWithEntity(t._component||t._fauxComponent),this._world.addRigidBody(t))}removeRigidbody(t){this._world.removeRigidBody(t)}addCollider(t,i){i._shape&&(t.shape.addChildShape(i._shape,i.getColliderPositionGoblin(),i.getColliderRotationGoblin()),t.onShapeUpdated(),this.preSimulationSynchronizationForCollider(i))}removeCollider(t,i){i._shape&&(i._body=null,i._shape=null,t.shape.removeChildShape(i.id),t.onShapeUpdated())}enableWheelCollider(t){this.wheelColliders.push(t)}disableWheelCollider(t){const i=this.wheelColliders.indexOf(t);-1!==i&&(this.wheelColliders[i]=this.wheelColliders[this.wheelColliders.length-1],this.wheelColliders.pop())}addConstraint(t){this._world.addConstraint(t.constraint)}removeConstraint(t){this._world.removeConstraint(t.constraint)}onSimulationStep(t){this._world.step(t)}getAttachedColliders(t){return t._unityComponents.collider}getAttachedRigidbody(t){const i=t._unityComponents.rigidbody[0];if(!i)return null;const e=i.enabled,o=!!i._body&&!!i._body._component;return e&&o?i._body:null}attachFauxRigidbody(t){const i=new Goblin.RigidBody(-1,1/0),e=y.fromStaticBody(i);return e.useGravity=!1,e.isStatic=!0,e._entity=t,this.addRigidbody(i),this.synchronizeBodyWithEntity(e),i}getRelTransformAndAccumScale(t,i,e,o){}synchronizeBodyWithEntity(t,i=!0,e=!0){const o=t._entity,n=t._body,s=o.getPosition(),a=o.getRotation();m.set(s.x,s.y,s.z),S.set(a.x,a.y,a.z,a.w),i&&e?(n.setTransform(m,S),t._previousSyncPosition.copy(s),t.interpolatedPosition.copy(s),t._previousSyncRotation.copy(a),t.interpolatedRotation.copy(a)):i?(n.setPosition(m),t._previousSyncPosition.copy(s),t.interpolatedPosition.copy(s)):(n.setRotation(S),t._previousSyncRotation.copy(a),t.interpolatedRotation.copy(a)),t.interpolatedFraction=0,t.interpolatedAABBVersion=o.aabbVersion}synchronizeEntityWithBody(t,i=!0,e=!0){const o=t.entity;t.body.getTransform(p,u);const n=o.getPosition(),s=o.getRotation();if(i&&!n.equals(p)){const i=t.constraints;let e=!1;i&UnityEngine.RigidbodyConstraints.FreezePositionX&&(p.x=n.x,e=!0),i&UnityEngine.RigidbodyConstraints.FreezePositionY&&(p.y=n.y,e=!0),i&UnityEngine.RigidbodyConstraints.FreezePositionZ&&(p.z=n.z,e=!0),o.setPosition(p),e&&(t.position=p),t._previousSyncPosition.copy(p),t.interpolatedPosition.copy(p),t.interpolatedFraction=0}e&&Math.abs(s.dot(u))<1-Goblin.EPSILON&&(o.setRotation(u),t._previousSyncRotation.copy(u),t.interpolatedRotation.copy(u),t.interpolatedFraction=0)}updateConstraint(t){}synchronizeBodyTransform(t){}preSimulationSynchronization(t,i){const e=t instanceof Goblin.RigidBody?t._fauxComponent:t,o=e._body,n=e._entity;if(!e.isInterpolationOrExtrapolationEnabled()||!o.isDynamic||n.aabbVersion!==e.interpolatedAABBVersion){if(i===s.a.PreSyncStages.TransformToPhysics){if(!(e._worldTransformVersion!==n.aabbVersion))return;const t=!e._previousSyncPosition.equals(n.getPosition()),i=!e._previousSyncRotation.equals(n.getRotation());return this.synchronizeBodyWithEntity(e,t,i),void(e._worldTransformVersion=n.aabbVersion)}if(i===s.a.PreSyncStages.PhysicsToTransform){const t=!o.isKinematic||e._dirtyPosition,i=!o.isKinematic||e._dirtyRotation;if(!t&&!i)return;this.synchronizeEntityWithBody(e,t,i),e._dirtyPosition=!1,e._dirtyRotation=!1}}}preSimulationSynchronizationForCollider(t){super.preSimulationSynchronizationForCollider(t),t.layer=t.entity.cullingLayer}postSimulationSynchronization(t){const i=t._entity,e=t._body,o=t._worldTransformVersion!==i.aabbVersion;if(e.isKinematic)o&&this.synchronizeBodyWithEntity(t);else if(!e.isStatic||o){if(e.isDynamic&&t.shouldInterpolatePosition())return i.setPosition(t._previousSyncPosition),i.setRotation(t._previousSyncRotation),t.interpolatedPosition.copy(i.getPosition()),t.interpolatedRotation.copy(i.getRotation()),t.interpolatedFraction=0,t.interpolatedAABBVersion=i.aabbVersion,e.getTransform(p,u),t._previousSyncPosition.copy(p),void t._previousSyncRotation.copy(u);this.synchronizeEntityWithBody(t),e.isDynamic&&t.shouldExtrapolatePosition()&&(t.interpolatedPosition.copy(i.getPosition()),t.interpolatedRotation.copy(i.getRotation()),t.interpolatedFraction=0,t.interpolatedAABBVersion=i.aabbVersion)}}onFixedUpdate(t){this.integratedPhysicsTime+=t;for(let t=0;t<this.wheelColliders.length;t++)this.wheelColliders[t].fixedUpdate();super.onFixedUpdate(t),this._world.emitEvents()}handleContacts(){}onUpdate(t){this.integratedTime+=t*UnityEngine.Time.timeScale;const i=this._getPhysicsSystem(),e=i.autoSyncTransforms;i.autoSyncTransforms=!1;for(let t=0;t<this._rigidbodies.length;t++){const i=this._rigidbodies[t];i.body.isDynamic&&(i.shouldInterpolatePosition()?this._interpolatePosition(i):i.shouldExtrapolatePosition()&&this._extrapolatePosition(i))}e&&(i.autoSyncTransforms=!0)}onTriggerContactEnter(t){this.emitTriggerContactEvent("OnTriggerEnter",t)}onTriggerContactStay(t){this.emitTriggerContactEvent("OnTriggerStay",t)}onTriggerContactExit(t){this.emitTriggerContactEvent("OnTriggerExit",t)}emitTriggerContactEvent(t,i){const e=i.shape_a._component,o=i.bodyA._component,s=i.shape_b._component,a=i.bodyB._component;if(!!e&&!e._enabled||!!s&&!s._enabled)return;let r=!1,l=!1;const d=n.d.instance;d.startSubSection([n.d.PHYSICS,t]),this.componentHasEventListeners(e,t)&&(r=this.dispatchContact(e._entity,t,s.code)),this.componentHasEventListeners(s,t)&&(l=this.dispatchContact(s._entity,t,e.code)),r=r&&!!o&&o.entity===e.entity,l=l&&!!a&&a.entity===s.entity,!r&&this.componentHasEventListeners(o,t)&&this.dispatchContact(o._entity,t,s.code),!l&&this.componentHasEventListeners(a,t)&&this.dispatchContact(a._entity,t,e.code),d.endSubSection([n.d.PHYSICS,t])}onCollisionContactEnter(t){this.emitCollisionContactEvent("OnCollisionEnter",t)}onCollisionContactStay(t){this.emitCollisionContactEvent("OnCollisionStay",t)}onCollisionContactExit(t){this.emitCollisionContactEvent("OnCollisionExit",t)}emitCollisionContactEvent(t,i){const e=i.shape_a._component,o=i.shape_b._component,s=i.bodyA._component,a=i.bodyB._component;let r=!1,l=!1;const d=n.d.instance;d.startSubSection([n.d.PHYSICS,t]),this.componentHasEventListeners(s,t)&&(r=this.dispatchContact(s._entity,t,UnityEngine.Object.FromHandle(UnityEngine.Collision,i).ConfigureFor(0))),this.componentHasEventListeners(a,t)&&(l=this.dispatchContact(a._entity,t,UnityEngine.Object.FromHandle(UnityEngine.Collision,i).ConfigureFor(1))),!r&&this.componentHasEventListeners(e,t)&&this.dispatchContact(e._entity,t,UnityEngine.Object.FromHandle(UnityEngine.Collision,i).ConfigureFor(0)),!l&&this.componentHasEventListeners(o,t)&&this.dispatchContact(o._entity,t,UnityEngine.Object.FromHandle(UnityEngine.Collision,i).ConfigureFor(1)),d.endSubSection([n.d.PHYSICS,t])}componentHasEventListeners(t,i){return!!t&&!!t.entity&&!!t.entity._enabledInHierarchy&&this.entityHasEventListeners(t.entity,i)}setIgnoreCollisionBetweenLayers(t,i,e){super.setIgnoreCollisionBetweenLayers(t,i,e),this._world.onCollisionMatrixUpdated()}_interpolatePosition(t){const i=t.entity,e=t.body;if(i.aabbVersion!==t.interpolatedAABBVersion)return;const o=this.integratedPhysicsTime,n=o+UnityEngine.Time.fixedDeltaTime,s=this.integratedTime;if(o===s||n<s)return;const a=(s-o)/(n-o),r=(a-t.interpolatedFraction)/(1-t.interpolatedFraction);e.getTransform(p,u),g.sub2(p,t.interpolatedPosition),g.scale(r),g.add(t.interpolatedPosition),i.setPosition(g),b.slerp(t.interpolatedRotation,u,r),i.setRotation(b),t.interpolatedPosition.copy(i.getPosition()),t.interpolatedRotation.copy(i.getRotation()),t.interpolatedFraction=a,t.interpolatedAABBVersion=i.aabbVersion}_extrapolatePosition(t){const i=t.entity;if(i.aabbVersion!==t.interpolatedAABBVersion)return;const e=this.integratedPhysicsTime,o=e+UnityEngine.Time.fixedDeltaTime,n=this.integratedTime;if(e===n||o<n)return;const s=(n-e)/(o-e),a=(o-e)*(s-t.interpolatedFraction);g.copy(t.velocity),g.scale(a),g.add(t.interpolatedPosition),i.setPosition(g),g.copy(t.angularVelocity);let r=g.length();r*a>Math.PI/4&&(r=Math.PI/4/a),r<.001?g.scale(.5*a-a*a*a*.020833333333*r*r):g.scale(Math.sin(.5*r*a)/r),b.x=g.x,b.y=g.y,b.z=g.z,b.w=Math.cos(r*a*.5),b.mul(t.interpolatedRotation),i.setRotation(b),t.interpolatedPosition.copy(i.getPosition()),t.interpolatedRotation.copy(i.getRotation()),t.interpolatedFraction=s,t.interpolatedAABBVersion=i.aabbVersion}_getPhysicsSystem(){return n.a.getApplication().systems.physics}}const P=new o.l;class E extends n.j{constructor(t){super(t),this.id="physics",this.performanceSamplerSection=n.d.PHYSICS,this._autoSyncTransforms=!1,this._autoSimulation=!0,this._world=null,this._adapter=null,this.initializePhysicsEngine();const i=n.i.instance.physicsSettings;this._applyProjectSettings(i)}initializePhysicsEngine(){this._world=Goblin.World.initialize(),this._adapter=new C({world:this._world})}onFixedUpdate(t){this._autoSimulation&&this.simulate(t)}simulate(t){this._adapter.onFixedUpdate(t)}onUpdate(t){this._adapter.onUpdate(t)}setIgnoreCollisionBetweenLayers(t,i,e){this._adapter.setIgnoreCollisionBetweenLayers(t,i,e)}syncHierarchy(t){this._adapter.syncHierarchy(t)}syncTransforms(t){this._autoSyncTransforms&&this._adapter.syncTransforms(t)}get gravity(){const t=this._world.gravity;return P.set(t.x,t.y,t.z),P}set gravity(t){this._world.gravity.set(t.x,t.y,t.z)}get defaultSolverIterations(){return this._world.solver.max_iterations}set defaultSolverIterations(t){this._world.solver.max_iterations=t}get bounceThreshold(){return this._world.bounceThreshold}set bounceThreshold(t){this._world.bounceThreshold=t}get adapter(){return this._adapter}get autoSyncTransforms(){return this._autoSyncTransforms}set autoSyncTransforms(t){this._autoSyncTransforms=t}get autoSimulation(){return this._autoSimulation}set autoSimulation(t){this._autoSimulation=t}_applyProjectSettings(t){this.gravity=t.gravity.clone(),this.autoSyncTransforms=t.autoSyncTransforms,this.defaultSolverIterations=t.defaultSolverIterations,this.bounceThreshold=t.bounceThreshold,this.autoSimulation=t.autoSimulation;for(let i=0;i<t.collisionMatrix.length;i++){const e=t.collisionMatrix[i];this.setIgnoreCollisionBetweenLayers(e.layerId,e.otherLayerId,e.enabled)}}}class x extends n.j{constructor(t){super(t),this.id="rigidbody",this.performanceSamplerSection=n.d.PHYSICS,this._world=t.systems.physics._world}removeComponent(t,i){i.onDisable(),super.removeComponent(t,i)}}class w extends n.j{constructor(t){super(t),this.id="joint",this.performanceSamplerSection=n.d.PHYSICS,this._world=t.systems.physics._world}}class R extends n.k{constructor(t={}){super(),this.unityClass=Bridge._getTypeByName(t.type),this.type=t.type||"UnityEngine.FixedJoint",this.constraint=new Goblin.Constraint,this.constraint.active=!1,this.constraint.update=this._updateConstraint.bind(this),this._adapter=n.a.getApplication().systems.physics.adapter,this["__UnityEngine.FixedJoint"]=null,this["__UnityEngine.SpringJoint"]=null,this["__UnityEngine.HingeJoint"]=null,this["__UnityEngine.CharacterJoint"]=null,this["__UnityEngine.ConfigurableJoint"]=null,pc.markPhysics3dModuleAsUsed(),TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"JointComponent")}get sortingOrderInQueue(){return this._sortingOrderInQueue}onEnable(){return!!super.onEnable()&&(this.code&&this.code.OnEnable(),this._adapter.enableConstraint(this),!0)}onDisable(){return!!super.onDisable()&&(this.code&&this.code.OnDisable(),this._adapter.disableConstraint(this),!0)}_updateConstraint(t){const i=n.d.instance;i.startSubSection(n.d.PHYSICS_JOINTS),this.code&&this.code.OnUpdate(t),i.endSubSection(n.d.PHYSICS_JOINTS)}onAwake(){this.code&&this.code.OnAwake()}}class f extends n.j{constructor(t){super(t),this.id="collider",this.performanceSamplerSection=n.d.PHYSICS,this._world=t.systems.physics._world}removeComponent(t,i){i.onDisable(),super.removeComponent(t,i)}}var T=e(2);const v=new o.l,z=new o.i,B=new Goblin.Vector3,U=new Goblin.Vector3;class A extends n.k{constructor(t){super(),this.id=A.uid++,this._position=t.position,this._enabled=!!t.enabled,this._isTrigger=!!t.isTrigger,this._convex=!!t.convex||!1,this._guid=(0,T.b)(),this._material=t.material,this._relativeTransform=(new o.h).setIdentity(),this._accumulatedScale=new o.l(1,1,1),this._colliderPosition=new o.l,this._colliderRotation=new o.i,this._colliderPositionGoblin=new Goblin.Vector3,this._colliderRotationGoblin=new Goblin.Quaternion,this._shape=null,this._body=null,this._layer=0,this._worldTransformVersion=-1,this._adapter=n.a.getApplication().systems.physics.adapter,pc.markPhysics3dModuleAsUsed()}get code(){return this._code||this.initializeCode(),this._code}get bounds(){const t=this._body,i=new UnityEngine.Bounds;i.setMinMax(o.l.ZERO,o.l.ZERO);let e=null;for(let i=0;i<t.shape.child_shapes.length;i++)if(t.shape.child_shapes[i].shape===this._shape){e=t.shape.child_shapes[i];break}if(!e)return i;const n=new Goblin.AABB,s=new Goblin.Matrix4;s.makeTransform(t.getRotation(),t.getPosition()),n.transform(e.aabb,s);const a=new o.l(n.min.x,n.min.y,n.min.z),r=new o.l(n.max.x,n.max.y,n.max.z);return i.setMinMax(a,r),i}get shape(){return this._shape}get material(){return this._material}set material(t){this._material=t,this._shape&&(this._shape.material=t)}get isTrigger(){return this._isTrigger}set isTrigger(t){this._isTrigger=t,this._shape&&this._shape.isTrigger!==t&&(this._shape.isTrigger=t,this._body.shape.updateIsTriggerFlag(),this._body.onShapeUpdated())}get layer(){return this._shape.layer}set layer(t){this._layer=t,this._body.wakeUp(),this.syncLayer()}get center(){return this._position}set center(t){this._position.copy(t),this._updateShapeSizeAndPosition()}initializeCode(){throw new Error("Not Implemented")}getEntity(){return this.entity}getAttachedBodyEntity(){return(this._body._component||this._body._fauxComponent)._entity}getColliderPositionGoblin(){return this._colliderPositionGoblin.x=this._colliderPosition.x,this._colliderPositionGoblin.y=this._colliderPosition.y,this._colliderPositionGoblin.z=this._colliderPosition.z,this._colliderPositionGoblin}getColliderRotationGoblin(){return this._colliderRotationGoblin.x=this._colliderRotation.x,this._colliderRotationGoblin.y=this._colliderRotation.y,this._colliderRotationGoblin.z=this._colliderRotation.z,this._colliderRotationGoblin.w=this._colliderRotation.w,this._colliderRotationGoblin}syncLayer(){this._shape&&this._shape.layer!==this._layer&&(this._shape.layer=this._layer,this._body&&this._body.shape.updateLayersMasks())}updateShape(t,i,e){this._updateShapeSizeAndPosition(),this._layer=this.entity.cullingLayer,this.syncLayer()}_calculateRelativePositionAndRotation(t){const i=this.getEntity(),e=this.getAttachedBodyEntity();i.transformPoint(t,this._colliderPosition),e.transformPointInverse(this._colliderPosition,this._colliderPosition),this._colliderPosition.mul(e.getLossyScale()),e.transformQuaternionInverse(i.getRotation(),this._colliderRotation)}_updateShapeSizeAndPosition(){throw new Error("Not Implemented")}onAttached(){super.onAttached(),this._layer=this.entity.cullingLayer}onEnable(){return!!super.onEnable()&&(this._adapter.enableCollider(this),!0)}onDisable(){return!!super.onDisable()&&(this._adapter.disableCollider(this),!0)}closestPoint(t){B.set(t.x,t.y,t.z),this._body.getClosestPointOnShape(this._shape,B,U);const i=new o.l;return i.set(U.x,U.y,U.z),i}closestPointOnBounds(t){B.set(t.x,t.y,t.z),this._body.getClosestPointOnShapeBounds(this._shape,B,U);const i=new o.l;return i.set(U.x,U.y,U.z),i}rayIntersect(t,i,e){B.set(t.x,t.y,t.z),U.set(i.x,i.y,i.z);const o=[];this._body.rayIntersect(B,U,e,-1,!0,o);for(let t=0;t<o.length;t++)o[t].shape!==this._shape&&(o[t]=o[o.length-1],o.pop(),t--);return o[0]||null}}A.uid=0;class G extends A{constructor(t={}){const i={center:o.l.ZERO,size:o.l.ONE,enabled:!0,material:null,isTrigger:!1};super({position:(t=Object.assign({},i,t)).center.clone(),material:t.material,enabled:t.enabled,isTrigger:t.isTrigger}),this._size=t.size.clone(),this._lastBuildParams={colliderSize:new o.l,colliderPosition:new o.l,colliderRotation:new o.i,body:null},this["__UnityEngine.BoxCollider"]=null,this["__UnityEngine.Collider"]=null,TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"BoxColliderComponent")}get size(){return this._size}set size(t){this._size.copy(t),this._updateShapeSizeAndPosition()}_generateConvexHullShape(t,i,e){const o=String(Math.round(t.x/Goblin.EPSILON))+"-"+String(Math.round(t.y/Goblin.EPSILON))+"-"+String(Math.round(t.z/Goblin.EPSILON)),n=G._cache.get(o);if(n){const t=n.getShallowCopy();return t.uid=this.id,t._component=this,t.layer=this._layer,t.isTrigger=this._isTrigger,t.material=this._material,t}G._cache.size>1234&&G._cache.clear();const s=Goblin.ConvexHullShape.fromAABB(this.id,.5*t.x,.5*t.y,.5*t.z,i,e);return s._component=this,G._cache.set(o,s),s}_updateShapeSizeAndPosition(){if(!this._body)return void(this._shape=null);this._calculateRelativePositionAndRotation(this._position),this._accumulatedScale.copy(this.entity.getLossyScale()).abs(),v.copy(this._size),v.mul(this._accumulatedScale);const t=!this._lastBuildParams.colliderSize.equals(v,Goblin.EPSILON),i=!this._lastBuildParams.colliderPosition.equals(this._colliderPosition,Goblin.EPSILON)||!this._lastBuildParams.colliderRotation.equals(this._colliderRotation),e=this._lastBuildParams.body!==this._body;if(!this._shape||t)this._shape=this._generateConvexHullShape(v,this._material,this._isTrigger),this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else if(e)this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else{if(!i)return;this._body.shape.updateShapeTransform(this.id,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated()}this._lastBuildParams.colliderSize.copy(v),this._lastBuildParams.colliderPosition.copy(this._colliderPosition),this._lastBuildParams.colliderRotation.copy(this._colliderRotation),this._lastBuildParams.body=this._body}initializeCode(){this._code=new UnityEngine.BoxCollider(this),this["__UnityEngine.BoxCollider"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}}G._cache=new Map;class I extends A{constructor(t={}){t=Object.assign({},{material:null,mesh:null,convex:!1,enabled:!0,isTrigger:!1},t);const i={position:o.l.ZERO,material:t.material,enabled:t.enabled,isTrigger:t.isTrigger,convex:t.convex};super(i),this._mesh=t.mesh,this._lastBuildParams={mesh:null,meshVersion:-1,scale:new o.l,colliderPosition:new o.l,colliderRotation:new o.i,body:null,convex:i.convex},this["__UnityEngine.MeshCollider"]=null,this["__UnityEngine.Collider"]=null,TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"MeshColliderComponent")}get sharedMesh(){return this._mesh}set sharedMesh(t){this._mesh=t,this._updateShapeSizeAndPosition()}get convex(){return this._convex}set convex(t){this._convex=t,this._updateShapeSizeAndPosition()}getCacheKeyForCurrentMesh(){return`${this._mesh.id}-${this._mesh.version}-${String(Math.round(this._accumulatedScale.x/Goblin.EPSILON))+"_"+String(Math.round(this._accumulatedScale.y/Goblin.EPSILON))+"_"+String(Math.round(this._accumulatedScale.z/Goblin.EPSILON))}-${this._convex?1:0}`}_updateShapeSizeAndPosition(){if(!this._body)return void(this._shape=null);if(!this._mesh||0===this._mesh.vertexBuffer.numVertices||0===this.getMeshTriangleCount())return this._body.shape.removeChildShape(this.id),void(this._shape=null);this._calculateRelativePositionAndRotation(o.l.ZERO),this._accumulatedScale.copy(this.entity.getLossyScale());const t=!this._lastBuildParams.scale.equals(this._accumulatedScale,Goblin.EPSILON)||this._lastBuildParams.mesh!==this._mesh||this._lastBuildParams.meshVersion!==this._mesh.version||this._lastBuildParams.convex!==this._convex,i=!this._lastBuildParams.colliderPosition.equals(this._colliderPosition,Goblin.EPSILON)||!this._lastBuildParams.colliderRotation.equals(this._colliderRotation),e=this._lastBuildParams.body!==this._body;if(this._shape)if(t)this._shape=this.generateShape(),this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else if(e)this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else{if(!i)return;this._body.shape.updateShapeTransform(this.id,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated()}else this._shape=this.generateShape(),this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();this._lastBuildParams.colliderPosition.copy(this._colliderPosition),this._lastBuildParams.colliderRotation.copy(this._colliderRotation),this._lastBuildParams.body=this._body,this._lastBuildParams.scale.copy(this._accumulatedScale),this._lastBuildParams.mesh=this._mesh,this._lastBuildParams.meshVersion=this._mesh.version,this._lastBuildParams.convex=this._convex}generateShape(){const t=this.getCacheKeyForCurrentMesh(),i=I._cache.get(t);if(i){const t=i.getShallowCopy();return t.uid=this.id,t._component=this,t.layer=this._layer,t.isTrigger=this._isTrigger,t.material=this._material,t}I._cache.size>1234&&I._cache.clear();const e=new Float32Array(this._mesh.vertexBuffer.storage),o=this._mesh.vertexBuffer.getFormat().getStructureFor(T.c.SEMANTIC_POSITION);let n=this._mesh.subMeshes||[];0===n.length&&(n=[this._mesh]);const s=this.getMeshTriangleCount(),a=this._convex?null:new Array(s),r=this._convex?null:new Array(s),l=[],d=new Set;let h=0;for(let t=0;t<n.length;t++){const i=n[t];if(i&&i.indexBuffer&&i.indexBuffer[0]){const t=new Uint16Array(i.indexBuffer[0].storage);for(let i=0;i<t.length;i++){const n=t[i]*(o.stride/4)+o.offset,s=e[n+0],c=e[n+1],_=e[n+2],y=s+1e4*c+1e8*_;let p=null;if(d.has(y))for(let t=l.length-1;t>=0;t--){const i=l[t];if(i.x===s&&i.y===c&&i.z===_){p=i;break}}p||(p=new Goblin.Vector3(s,c,_),l.push(p),d.add(y)),this._convex||(r[h]=p,a[h]=h),h++}}}this._convex&&Goblin.ConvexHullShape.approximateByAABBIfNecessary(l);for(let t=0;t<l.length;t++){const i=l[t];i.x*=this._accumulatedScale.x,i.y*=this._accumulatedScale.y,i.z*=this._accumulatedScale.z}this._convex&&Goblin.ConvexHullShape.approximateByAABBIfNecessary(l);const c=this._convex?new Goblin.ConvexHullShape(this.id,l,this._material,!1,this._isTrigger):new Goblin.MeshShape(this.id,r,a,this._material,this._isTrigger);return c._component=this,I._cache.set(t,c),c}getMeshTriangleCount(){let t=this._mesh.subMeshes||[];0===t.length&&(t=[this._mesh]);let i=0;for(let e=0;e<t.length;e++){const o=t[e];o&&o.indexBuffer&&o.indexBuffer[0]&&(i+=o.indexBuffer[0].numBytes/o.indexBuffer[0].bytesPerIndex)}return i}initializeCode(){this._code=new UnityEngine.MeshCollider(this),this["__UnityEngine.MeshCollider"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}}I._cache=new Map;class M extends n.k{constructor(){super(),this._adapter=n.a.getApplication().systems.physics.adapter,this["__UnityEngine.WheelCollider"]=null,this["__UnityEngine.Collider"]=null,pc.markPhysics3dModuleAsUsed(),TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"WheelColliderComponent")}get code(){return this._code||this.initializeCode(),this._code}initializeCode(){this._code=new UnityEngine.WheelCollider(this),this["__UnityEngine.WheelCollider"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}onEnable(){return!!super.onEnable()&&(this._adapter.enableWheelCollider(this),!0)}onDisable(){return!!super.onDisable()&&(this._adapter.disableWheelCollider(this),!0)}onAwake(){this.code.OnAwake()}fixedUpdate(){this.code.FixedUpdate()}}class O extends n.k{constructor(){super(),pc.markPhysics3dModuleAsUsed()}get code(){return this._code||this.initializeCode(),this._code}initializeCode(){this._code=new UnityEngine.CharacterController(this),this["__UnityEngine.CharacterController"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}onAwake(){this.code.OnAwake()}}pc.PhysicsSystem=E,pc.RigidbodySystem=x,pc.RigidbodyComponent=y,pc.JointSystem=w,pc.JointComponent=R,pc.ColliderSystem=f,pc.ColliderComponent=A,pc.BoxColliderComponent=G,pc.SphereColliderComponent=class extends A{constructor(t={}){const i={center:o.l.ZERO,radius:.5,material:null,enabled:!0,isTrigger:!1};super({position:(t=Object.assign({},i,t)).center.clone(),material:t.material,enabled:t.enabled,isTrigger:t.isTrigger}),this._radius=t.radius,this._lastBuildParams={radius:0,colliderPosition:new o.l,colliderRotation:new o.i,body:null},this["__UnityEngine.SphereCollider"]=null,this["__UnityEngine.Collider"]=null,TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"SphereColliderComponent")}get radius(){return this._radius}set radius(t){this._radius=t,this._updateShapeSizeAndPosition()}_updateShapeSizeAndPosition(){if(!this._body)return void(this._shape=null);this._calculateRelativePositionAndRotation(this._position),this._accumulatedScale.copy(this.entity.getLossyScale()),this._accumulatedScale.abs();const t=this._radius*Math.max(Math.max(this._accumulatedScale.x,this._accumulatedScale.y),this._accumulatedScale.z),i=Math.abs(this._lastBuildParams.radius-t)>Goblin.EPSILON,e=!this._lastBuildParams.colliderPosition.equals(this._colliderPosition,Goblin.EPSILON)||!this._lastBuildParams.colliderRotation.equals(this._colliderRotation),o=this._lastBuildParams.body!==this._body;if(!this._shape||i)this._shape=new Goblin.SphereShape(this.id,t,this._material,this._isTrigger),this._shape._component=this,this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else if(o)this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else{if(!e)return;this._body.shape.updateShapeTransform(this.id,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated()}this._lastBuildParams.radius=t,this._lastBuildParams.colliderPosition.copy(this._colliderPosition),this._lastBuildParams.colliderRotation.copy(this._colliderRotation),this._lastBuildParams.body=this._body}initializeCode(){this._code=new UnityEngine.SphereCollider(this),this["__UnityEngine.SphereCollider"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}},pc.MeshColliderComponent=I,pc.CapsuleColliderComponent=class extends A{constructor(t={}){const i={center:o.l.ZERO,radius:.5,height:1,material:null,enabled:!0,isTrigger:!1,direction:1};super({position:(t=Object.assign({},i,t)).center.clone(),material:t.material,enabled:t.enabled,isTrigger:t.isTrigger}),this._radius=t.radius,this._height=t.height,this._direction=t.direction,this._lastBuildParams={radius:0,halfHeight:0,colliderPosition:new o.l,colliderRotation:new o.i,body:null},this["__UnityEngine.CapsuleCollider"]=null,this["__UnityEngine.Collider"]=null,TESTS&&pc.hiddenShapeValidator.addObjectToValidationSet(this,"CapsuleColliderComponent")}get radius(){return this._radius}set radius(t){this._radius=t,this._updateShapeSizeAndPosition()}get height(){return this._height}set height(t){this._height=t,this._updateShapeSizeAndPosition()}get direction(){return this._direction}set direction(t){this._direction=t,this._updateShapeSizeAndPosition()}_updateShapeSizeAndPosition(){if(!this._body)return void(this._shape=null);this._calculateRelativePositionAndRotation(this._position),this.updateCapsuleQuaternion(this._direction,z),this._colliderRotation.mul2(z,this._colliderRotation),this._accumulatedScale.copy(this.entity.getLossyScale()),this._accumulatedScale.abs();let t=1,i=1;switch(this._direction){case 0:t=Math.max(this._accumulatedScale.y,this._accumulatedScale.z),i=this._accumulatedScale.x;break;case 1:t=Math.max(this._accumulatedScale.x,this._accumulatedScale.z),i=this._accumulatedScale.y;break;case 2:t=Math.max(this._accumulatedScale.x,this._accumulatedScale.y),i=this._accumulatedScale.z}const e=this._radius*t,o=Math.max(.5*this._height*i-e,10*Goblin.EPSILON),n=Math.abs(this._lastBuildParams.radius-e)>Goblin.EPSILON||Math.abs(this._lastBuildParams.halfHeight-o)>Goblin.EPSILON,s=!this._lastBuildParams.colliderPosition.equals(this._colliderPosition,Goblin.EPSILON)||!this._lastBuildParams.colliderRotation.equals(this._colliderRotation),a=this._lastBuildParams.body!==this._body;if(!this._shape||n)this._shape=new Goblin.CapsuleShape(this.id,e,o,this._material,this._isTrigger),this._shape._component=this,this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else if(a)this._body.shape.addChildShape(this._shape,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated();else{if(!s)return;this._body.shape.updateShapeTransform(this.id,this.getColliderPositionGoblin(),this.getColliderRotationGoblin()),this._body.onShapeUpdated()}this._lastBuildParams.radius=e,this._lastBuildParams.halfHeight=o,this._lastBuildParams.colliderPosition.copy(this._colliderPosition),this._lastBuildParams.colliderRotation.copy(this._colliderRotation),this._lastBuildParams.body=this._body}updateCapsuleQuaternion(t,i){switch(t){case 0:return i.setFromAxisAngle(o.l.FORWARD,90);case 1:return i.set(0,0,0,1);case 2:return i.setFromAxisAngle(o.l.RIGHT,90);default:return NaN}}initializeCode(){this._code=new UnityEngine.CapsuleCollider(this),this["__UnityEngine.CapsuleCollider"]=this._code,this["__UnityEngine.Collider"]=this._code,this._code.handle=this}},pc.WheelColliderComponent=M,pc.CharacterControllerComponent=O,pc.markPhysics3dModuleAsUsed=()=>{TRACE&&window.traceResults.markModuleAsUsed(window.traceResults.EngineModules.Physics3d)}}},t=>{t.O(0,[1],(()=>{return i=46,t(t.s=i);var i}));t.O()}]);